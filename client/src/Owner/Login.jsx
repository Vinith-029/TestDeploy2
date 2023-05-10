import { domAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { logo } from '../assets';
import { styles } from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//import { StarsCanvas } from '../components/canvas';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});

const Login = () => {
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
      alert('User Not Registered');
      throw new Error('User Not Registered');

    } 
    else if(error.response && error.response.status === 402){
      alert('Wrong Password');
      throw new Error('Wrong Password');
    }
    else  {
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
      const admin = response.data.user.isAdmin;
      const Warehouse_admin= response.data.user.isWarehouse ;
      const Transport_admin= response.data.user.isTransport
      return {token,admin , Warehouse_admin ,  Transport_admin};
    } catch (error) {
      throwError(error);
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const {token,admin , Warehouse_admin , Transport_admin} = await login(email, password);
    if (token && admin) {
      localStorage.setItem('token', token);
      navigate('/Admin');
    }
    else if (token && Warehouse_admin){
      localStorage.setItem('token', token);
      navigate('/Second');
    }
    else if (token && Transport_admin){
      localStorage.setItem('token', token);
      navigate('/Vhome');
    }
     else if(!admin && !Warehouse_admin && !Transport_admin )
     {
       alert('Not Assigned');
     }

     else {
      alert(' NOT Registered Please signup');
    }
  };
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  

  return (
    <div>
       <nav
     className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
       scrolled ? "bg-primary" : "bg-transparent"
     }`}>
     <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
       <Link
         to='/'
         className='flex items-center gap-2'
         onClick={() => {
           setActive("");
           window.scrollTo(0, 0);
         }}
       >
         <img src={logo} alt='logo' className='w-14 H-14 object-contain' />
         <p className='text-white text-[18px] font-bold  cursor-pointer  '>
           LogiShip &nbsp;
           <span className='sm:block hidden  text-[11px] align-text-bottom'> | Get Your Load To Market Faster</span>
         </p>
         </Link>
         <Link to='/'>
         <button className='text-white bg-none hover:text-black hover:bg-[#915EFF] px-4 py-2 border border-[#915EFF] rounded'>Home</button>
         </Link>
         </div>
         
       </nav>
    <div className='bg-hero-pattern bg-cover flex flex-col h-screen justify-center'>
    <form action="" className='space-y-5' onSubmit={handleSubmit}>
    <center>
    <h1 className='text-[20px] font-bold text-white'>Hello <span className='text-[20px] text-[#915EFF] font-bold'>User</span>, please log in</h1>
    </center>
    <center>
      <input className=' w-96 p-2 px-3 bg-inputBoxColor bg-opacity-50 ring ring-purple-800 
      border border-white outline-none rounded-lg text-white' 
      name="email" value={email} onChange={handleEmail} type="email" placeholder='Enter your email or username' required />
    </center>
    <center>
       <input className=' w-96 p-2 px-3 bg-inputBoxColor bg-opacity-50 ring ring-purple-800 border border-white outline-none rounded-lg text-white'
       name="password" 
       value={password} 
       onChange={handlePassword} 
       type="password" 
       placeholder='Enter your password' required/>
    </center>
    <center>
      <a className='text-[#] text-lg hover:text-bold hover:border-b border-spacing-5 duration-300 text-[13px]' href="/Vregister">Sign Up</a>
    </center>
  <div className= 'flex flex-col items-center justify-center'>
    <button className="bg-buttonColor hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded" type="submit">
    Sign In
    </button>
  </div>
    </form>
    </div>
    </div>
  );
};

export default Login;