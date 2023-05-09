import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogdedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('signin-form'));
    const form = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    try {
      const { data } = await axios.post('http://localhost:3000/api/v1/user/signin', form);
      localStorage.setItem('token', data.token);
      const token = localStorage.getItem('token');
      const status = 401;
      if (data.status === status || !token) {
        setErrorMessage(error.response.data.message);
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        navigate('/achievements');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    console.log(isLogdedIn);
  };

  return (
    <form
      className="form"
      id="signin-form"
      onSubmit={ handleSubmit }
    >
      <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
      <button type="button"><Link to="/signup">Sign Up</Link></button>
      {' '}
      { errorMessage && <h1>{ errorMessage }</h1> }
      { errorMessage && <img src="https://media.tenor.com/Vyg73kR334sAAAAC/jurassic-park-ah.gif" alt="hahaha-wrong-word" width="250px" />}
    </form>
  );
}
