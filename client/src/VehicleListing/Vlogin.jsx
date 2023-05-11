import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://testlogiship.onrender.com/api/auth',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});

const Vlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const throwError = error => {
    if (error.response && error.response.status === 401) {
      alert("Invalid email or password")
      throw new Error('Invalid email or password');
    } else if(error.response && error.response.status === 402){
      alert("Wrong Password")
      throw new Error('Wrong Password');
    }
    else {
      console.error(error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await instance.post('/login', {
        email: email,
        password: password,
      });
      const token = response.data.accessToken;
      const transport_admin = response.data.user.isTransport;
      return { token, transport_admin };
    }
    catch (error) {
      throwError(error);
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const { token, transport_admin } = await login(email, password);
    if (token && transport_admin) {
      localStorage.setItem('token', token);
      navigate('/Vhome');
    } 
    else if(!transport_admin) {
            alert('Not registered')
    }
    else {
      alert('Login failed!');
    }
  };

  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  return (
    <div>
      <div className="bg-hero-pattern bg-cover h-screen ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center h-screen "
        >
          <div className="text-6xl mb-10">LOGIN</div>

          <div className="flex flex-col">
            <div className="text-xs">Email</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3  p-2 px-3"
              name="email"
              type="email"
              placeholder=""
              spellCheck = "false"
              autoComplete="off"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name="password"
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder=""
            />
          </div>
          
          <div className="flex flex-col">
            <button class="bg-buttonColor text-white font-bold py-2 px-4 rounded m-2 w-full">
              Login
            </button>
          </div>
        

          <div className="flex flex-col">
            <div className="text-xs">
              Don't have an account?{' '}
              <span className="text-buttonColor">
                <a href="/Vregister">Create one</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vlogin;
