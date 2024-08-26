'use client';

import { useState } from 'react';
import styles from './AuthForms.module.css';

interface AuthFormProps {
  onSubmit: (email: string, password: string, nickname: string) => void;
  buttonText: string;
  showPasswordConfirmation?: boolean;
}

export default function AuthForm({
  onSubmit,
  buttonText,
  showPasswordConfirmation = false,
}: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(email, password, nickname);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="nickname"
        placeholder="ニックネーム"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className={styles.formInput}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.formInput}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.formInput}
      />
      {showPasswordConfirmation && (
        <input
          type="password"
          placeholder="パスワード確認"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className={styles.formInput}
        />
      )}
      <button type="submit" className={styles.formButton}>
        {buttonText}
      </button>
    </form>
  );
}
