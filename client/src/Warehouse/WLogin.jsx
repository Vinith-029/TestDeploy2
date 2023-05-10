import React, { useEffect } from "react";
import "../Warehouse/WStyle.css";
import { useState } from 'react';
import { styles } from "../styles";
import { logo } from "../assets";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Warehouse/toggle";
import { Link } from 'react-router-dom';

const instance = axios.create({

  baseURL: 'http://localhost:3000/api/auth/',
  
  timeout: 5000 // Timeout to wait for a response (in milliseconds)
  
  });


function WLog() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  
  
  
  
  const handleEmail = (e) => {
  
  setEmail(e.target.value);
  
  };

  const navigate2 = useNavigate();

  const gotoSecond = () => {
    navigate2('/Second',{
      state : {
        email : email
      }
    })
  }
  const handlePassword = (e) => {
  setPassword(e.target.value);
   };
   const login = async (email, password) => {
  try {
  const response = await instance.post('/login', {
  email: email,
  password: password
   });
  
   const token = response.data.accessToken;
   const warehouse = response.data.user.isWarehouse;
   return {token,warehouse};

  } catch (error) {
  
    throwError(error);
 }
  
  };
  
  const throwError = error => {
    if (error.response && error.response.status === 402) {
          alert("Incorrect email or password!");
        } else if (error.response && error.response.status === 401) {
          alert("User not found!");
        } else {
          alert("Login failed!");
        }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
      const { token } = await login(email, password);
      // if (token && warehouse) {
        localStorage.setItem("token", token);
        gotoSecond();
      // } else {
      //   if (error.response && error.response.status === 401) {
      //     alert("Incorrect email or password!");
      //   } else if (error.response && error.response.status === 404) {
      //     alert("User not found!");
      //   } else {
      //     alert("Login failed!");
      //   }
      // }
    // } catch (error) {
    //   // if (error.response && error.response.status === 401) {
    //   //   alert("Incorrect email or password!");
    //   // } else if (error.response && error.response.status === 404) {
    //   //   alert("User not found!");
    //   // } else {
    //   //   alert("Login failed!");
    //   // }
    //   throwError(error);
    };
  
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

    return ( 
<div className="log">

  {/*Navbar by Tailwind*/}

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

      {/*Below page */}

      <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">

          {/*Sign In form*/}
          
            <form action="" autoComplete="off" className="sign-in-form loginform"  onSubmit={handleSubmit}>


              <div className="heading">
                <h5>Welcome Back !</h5>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    // id="name"
                    type="email" 
                    name="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={handleEmail}
                    value={email}
                  />
                  <label className="Newlabel">Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    // id="pass"
                    type="password" 
                    name="password"
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={handlePassword}
                    value={password}
                  />
                  <label className="Newlabel">Password</label>
                </div>
                <input type="submit" className="sign-btn" value="Sign In"/>          
                <p className="text">
                  Forget your password deatils ?
                  <a href="#"> Get help</a> signing in
                </p>
              </div>
            </form>


          </div>
          <div className="carousel"></div>
        </div>
      </div>
      </main>
 </div>
    )    
}
   
export default WLog;




