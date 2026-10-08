import { useState, type FormEvent } from 'react';
import { track } from '@vercel/analytics';
import './signup.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  list: 'waitlist' | 'android';
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
}

export default function SignupForm({ list, placeholder, buttonLabel, successMessage }: Props) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, list, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      track('Signup', { list });
      setStatus('success');
      setEmail('');
      setMessage(successMessage);
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className="signup-success" role="status">
        <span aria-hidden="true">✓</span> {message}
      </p>
    );
  }

  const inputId = `signup-${list}`;

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
      />
      <input
        type="text"
        name="website"
        className="signup-hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Signing up…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="signup-error" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}