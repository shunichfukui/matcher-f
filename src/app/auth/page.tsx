import React from 'react';

import Link from 'next/link';

const AuthPage = () => {
  return (
    <>
      <h1>認証</h1>
      <Link href={'/auth/login'}>ログイン</Link>
      <br />
      <Link href={'/auth/register'}>登録</Link>
    </>
  );
};

export default AuthPage;
