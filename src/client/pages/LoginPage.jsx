import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';

function LoginPage(apiUrl) {

  const handleLogin = async ({ username, password }) => {
    const res = await fetch(`${apiUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const { token } = await res.json()
    localStorage.setItem('jwt', token)
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <UserForm handleSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;