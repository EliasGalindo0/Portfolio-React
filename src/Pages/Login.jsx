import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(document.querySelector('#signin-form'));
    const form = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    try {
      const { data } = await axios.post('http://localhost:3000/api/v1/user/signin', form);
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
      if (isLoggedIn) {
        navigate('/image');
      }
    } catch (error) {
      const status = 401;
      if (error.response.status === status) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <form className="form" id="signin-form" onSubmit={ handleSubmit }>
      <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
      <button type="button"><Link to="/signup">Sign Up</Link></button>
      {' '}
      { errorMessage && <div>{ errorMessage }</div> }
    </form>
  );
}
