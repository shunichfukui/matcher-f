'use client';

import React, { useEffect, useState } from 'react';
import { checkAdmin } from '../../lib/api/admin/admin';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atoms/userAtom';

const Admin = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const user = useRecoilValue(userState);

  useEffect(() => {
    const checkIsAdmin = async () => {
      const status = await checkAdmin();
      if (status !== 200) {
        router.push('/');
        setError('アクセスが拒否されました。管理者のみアクセス可能です。');
      }
    };

    checkIsAdmin();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="admin">
      <h1>管理者ダッシュボード</h1>
      {user ? <p>{user.nickname}の管理画面</p> : <p>読み込み中...</p>}
    </div>
  );
};

export default Admin;
