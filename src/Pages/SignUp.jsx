import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(document.querySelector('#signup-form'));
    const form = {
      fullName: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    await axios.post('http://localhost:3001/api/v1/user/signup', form);
    navigate('/');
  };
  return (
    <form className="form" id="signup-form">
      <input type="name" name="name" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" onClick={ handleSubmit }>Register</button>
    </form>
  );
}
