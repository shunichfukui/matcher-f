'use client';

import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { register } from 'module';

export default function SignUpForm() {
  const router = useRouter();

  const handleSignUp = async (email: string, password: string) => {
    try {
      await register(email, password);
      router.push('/');
    } catch {
      alert('Sign up failed');
    }
  };

  return (
    <AuthForm
      onSubmit={handleSignUp}
      buttonText="Sign Up"
      showPasswordConfirmation
    />
  );
}
