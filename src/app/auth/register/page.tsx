import React, { Suspense } from 'react';
import SignUpForm from '../../components/auth/RegisterForm';

const Register = () => {
  return (
    <div>
      <h1>登録</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </div>
  );
};

export default Register;
