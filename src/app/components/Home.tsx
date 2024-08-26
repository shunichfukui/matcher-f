'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import styles from './Home.module.css';
import { userState } from '../../atoms/userAtom';
import { fetchUser } from '../lib/api/user';

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        // ユーザー情報が取得できなかった場合はauthページにリダイレクト
        router.push('/auth');
      }
    };
    getUser();
  }, [setUser, router]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {user ? (
          <>
            <h1 className={styles.title}>ようこそ、{user?.nickname}さん！</h1>
          </>
        ) : (
          <p>読み込み中...</p>
        )}
      </div>
    </main>
  );
}
