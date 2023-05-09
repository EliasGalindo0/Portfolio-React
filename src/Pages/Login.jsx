import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/api/v1/user/signin', { email, password });
      setToken(token);
      localStorage.setItem('token', token);
      console.log(token);
      if (token) {
        setIsLogged(true);
      } else {
        setFailedTryLogin(true);
        setIsLogged(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/achievements" />;

  return (
    <>
      <form className="form">
        <h1>Área do usuário</h1>
        <label htmlFor="email-input">
          <input
            className="login__login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="login__login_input"
            placeholder="Login"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="login__password_input"
            placeholder="Senha"
          />
        </label>
        {
          (failedTryLogin)
            ? (
              <div>
                <p data-testid="login__input_invalid_login_alert">
                  {
                    `O endereço de e-mail e/ou a senha não estão corretos.
                    Por favor, tente novamente.`
                  }
                </p>
                <img src="https://media.tenor.com/Vyg73kR334sAAAAC/jurassic-park-ah.gif" alt="hahaha-wrong-word" />
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

      {/* <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
      <button type="button"><Link to="/signup">Sign Up</Link></button>
      {' '}
      { errorMessage && <h1>{ errorMessage }</h1> }
      { errorMessage && } */}
    </>
  );
}

export default Login;
