import React, { Suspense } from 'react';

import Link from 'next/link';

const Admin = () => {
  return (
    <>
      <h1>admin画面</h1>
      <Link href={'/admin/login'}>ログイン</Link>
      <br />
      <Link href={'/admin/signUp'}>サインアップ</Link>
    </>
  );
};

export default Admin;
