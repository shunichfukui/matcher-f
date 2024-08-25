'use client';

import { useState } from 'react';
import styles from './AuthForms.module.css';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonText: string;
  showPasswordConfirmation?: boolean;
}

export default function AuthForm({
  onSubmit,
  buttonText,
  showPasswordConfirmation = false,
}: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.formInput}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.formInput}
      />
      {showPasswordConfirmation && (
        <input
          type="password"
          placeholder="Confirm Password"
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
