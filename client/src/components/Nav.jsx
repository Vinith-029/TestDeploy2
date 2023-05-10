import React, { useState } from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import {styles} from '../styles'

const Nav = () => {
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
         <button className='text-white bg-none hover:text-black hover:bg-[#915EFF] px-4 py-2 border border-[#915EFF] rounded'>Logout</button>
         </Link>
         </div>
         
       </nav>
       </div>


  );
}
 
export default Nav;