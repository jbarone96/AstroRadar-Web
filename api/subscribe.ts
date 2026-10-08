// Vercel serverless function: POST /api/subscribe
// Adds an email to a Resend segment (launch waitlist or Android testers).

declare const process: { env: Record<string, string | undefined> };

type ListKey = 'waitlist' | 'android';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RESEND_API = 'https://api.resend.com';

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  const segments: Record<ListKey, string | undefined> = {
    waitlist: process.env.RESEND_SEGMENT_WAITLIST,
    android: process.env.RESEND_SEGMENT_ANDROID,
  };

  let payload: { email?: unknown; list?: unknown; website?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (typeof payload.website === 'string' && payload.website.trim() !== '') {
    return json(200, { ok: true });
  }

  const list: ListKey | null =
    payload.list === 'waitlist' ? 'waitlist' : payload.list === 'android' ? 'android' : null;
  if (!list) {
    return json(400, { error: 'Invalid signup list.' });
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const segmentId = segments[list];
  if (!apiKey || !segmentId) {
    console.error('Missing RESEND_API_KEY or segment ID environment variable for list:', list);
    return json(500, { error: 'Signups are temporarily unavailable. Please try again later.' });
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  try {
    // 1) Try to create a new contact directly in the segment.
    const createRes = await fetch(`${RESEND_API}/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, unsubscribed: false, segments: [{ id: segmentId }] }),
    });
    if (createRes.ok) {
      return json(200, { ok: true });
    }

    // 2) Contact probably exists already (e.g. joined the other list) — add it to this segment.
    const addRes = await fetch(
      `${RESEND_API}/contacts/${encodeURIComponent(email)}/segments/${encodeURIComponent(segmentId)}`,
      { method: 'POST', headers },
    );
    if (addRes.ok) {
      return json(200, { ok: true });
    }

    console.error(
      'Resend signup failed',
      { createStatus: createRes.status, createBody: await createRes.text() },
      { addStatus: addRes.status, addBody: await addRes.text() },
    );
    return json(502, { error: 'Something went wrong. Please try again.' });
  } catch (err) {
    console.error('Resend request error', err);
    return json(502, { error: 'Something went wrong. Please try again.' });
  }
}