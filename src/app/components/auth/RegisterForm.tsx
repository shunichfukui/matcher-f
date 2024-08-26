'use client';

import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { register } from '../../lib/api/auth';

export default function RegisterForm() {
  const router = useRouter();

  const handleRegister = async (
    email: string,
    password: string,
    nickname: string
  ) => {
    try {
      await register(email, password, nickname);
      router.push('/');
    } catch {
      alert('アカウント登録に失敗しました');
    }
  };

  return (
    <AuthForm
      onSubmit={handleRegister}
      buttonText="登録"
      showPasswordConfirmation
    />
  );
}
