import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [setErrorMessage] = useState('');
  const [setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(document.querySelector('#signin-form'));
    const form = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const { data } = await axios.post('http://localhost:3001/api/v1/user/signin', form);
    if (data.status === parseInt('401', 10)) {
      setErrorMessage(data.response);
    } else {
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
      navigate('/image');
    }
  };

  return (
    <form className="form" id="signin-form">
      <input type="email" placeholder="e-mail" />
      <input type="password" placeholder="password" />
      <button type="submit" onClick={ handleSubmit }>Login</button>
      <button type="button"><Link to="/signup">Sign Up</Link></button>
    </form>
  );
}
