import React, { Suspense } from 'react';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  return (
    <div>
      <h1>ログイン</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default Login;
