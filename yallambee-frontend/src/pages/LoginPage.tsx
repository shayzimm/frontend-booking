import React from 'react';
import LoginForm, { LoginFormData } from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const handleLoginSubmit = (loginData: LoginFormData) => {
    console.log('Logging in with:', loginData);
    // Here you would typically send the loginData to your backend
  };

  return (
    <div className="container mx-auto my-8">
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPage;
