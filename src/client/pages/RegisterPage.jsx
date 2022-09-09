import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';

function RegisterPage(apiUrl) {

  const handleRegister = async ({ username, password }) => {
    const res = await fetch(`${url}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    console.log(await res.json())
  };

  return (
    <>
      <h1>Register</h1>
      <UserForm handleSubmit={handleRegister} />
    </>
  );
}

export default RegisterPage;