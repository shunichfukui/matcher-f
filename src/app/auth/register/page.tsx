import React, { Suspense } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';

const Register = () => {
  return (
    <div>
      <h1>登録</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default Register;
