import React, { Suspense } from 'react';

import Link from 'next/link';

const Admin = () => {
  return (
    <>
      <h1>認証</h1>
      <Link href={'/auth/login'}>ログイン</Link>
      <br />
      <Link href={'/auth/register'}>登録</Link>
    </>
  );
};

export default Admin;
