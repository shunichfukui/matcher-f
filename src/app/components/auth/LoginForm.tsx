'use client';

import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { login } from '../../lib/api/auth';

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async (
    email: string,
    password: string,
    nickname: string
  ) => {
    try {
      await login(email, password, nickname);
      router.push('/');
    } catch {
      alert('Login failed');
    }
  };

  return <AuthForm onSubmit={handleLogin} buttonText="Login" />;
}
