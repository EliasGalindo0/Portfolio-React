import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setError] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('api/v1/user/signin', { email, password });

      if (token) {
        setToken(token);
        console.log(token);
        // const { role } = await requestData('/login/validate', { email, password });

        localStorage.setItem('token', token);
        // localStorage.setItem('role',  role);

        setIsLogged(true);
      } else {
        setFailedTryLogin(true);
        setIsLogged(false);
        setError('Login e/ou senha inválidos! Por favor, tente novamente.');
      }
    } catch (Error) {
      setError(Error.message);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/achievements" />;

  return (
    <form className="home">
      <h1>ADMIN</h1>
      <label htmlFor="email-input">
        <input
          className="login__login_input"
          type="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          data-testid="login__login_input"
          placeholder="Login"
          required
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          data-testid="login__password_input"
          placeholder="Senha"
          required
        />
      </label>
      {
        (failedTryLogin)
          ? (
            <div>
              <p data-testid="login__input_invalid_login_alert" id="error">
                { errorMessage }
              </p>
              <img src="https://media.tenor.com/hYVsWvkpdrMAAAAC/you-didnt-say-the-magic-word-ah-ah.gif" alt="hahaha-wrong-word" />
            </div>
          )
          : null
      }
      <button
        data-testid="login__login_btn"
        type="submit"
        onClick={ (event) => login(event) }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
