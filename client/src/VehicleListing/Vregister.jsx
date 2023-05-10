import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/auth/',
  timeout: 5000,
});
const Vregister = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] =  useState('');
  const isTransport=true;
  const handleEmail = (e) => {
  
    setEmail(e.target.value);
    
    };
    const handlePassword = (e) => {
  
    setPassword(e.target.value);
      
    };
    const handleUsername = (e) => {
  
    setUsername(e.target.value);
        
    };
    const handleconfirmPassword = (e) => {
  
      setConfirmPassword(e.target.value);
          
      };
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      try {
        
        const response = await instance.post('/register', {
          username,
          password,
          email,
          isTransport
        });
        
        window.location.href = '/Vlogin';
        console.log(response.data); 
      } catch (error) {
        console.error(error); 
      }
    };
  return (
    <div>
      <div className="bg-hero-pattern bg-cover h-screen ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col justify-center items-center h-screen "
        >
          <div className="text-6xl mb-10">REGISTER</div>

          <div className="flex flex-col">
            <div className="text-xs">Company Name</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name='name'
              value={username}
              onChange={handleUsername}
              type="text"
              placeholder=""
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Company Email</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name='email'
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder=""
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name='password'
              onChange={handlePassword}
              value={password}
              type="Password"
              placeholder=""
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Confirm your Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleconfirmPassword}
              type="Password"
              placeholder=""
            />
          </div>

          <div className="flex flex-col">
            <button class="bg-buttonColor text-white font-bold py-2 px-4 rounded m-2 w-full">
              Register
            </button>
          </div>

          <div className="flex flex-col">
            <div className="text-xs">
              Already have an account?
              <span className="text-buttonColor">
                <a href="/Vlogin">Login</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vregister;
