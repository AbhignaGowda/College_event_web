// src/app/components/LoginPage.jsx
"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/profile'); // Redirect to profile page after login
    return null; // Prevent rendering of login button
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
