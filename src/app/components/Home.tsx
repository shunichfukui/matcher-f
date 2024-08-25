'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import styles from './Home.module.css';

import { userState } from '../../atoms/userAtom';
import { fetchUser } from '../lib/api/user';

export default function Home() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    };
    getUser();
  }, [setUser]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {user
          ? `メールアドレス: ${user.email}`
          : 'ユーザーがログインしていません'}
      </div>
    </main>
  );
}
