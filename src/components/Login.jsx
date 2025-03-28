import React, { useRef } from 'react'
import Header from './Header.jsx'
import { NETFLIX_BG } from '../utils/constants.jsx';
import { useState } from "react";
import { checkValidData } from '../utils/validate.jsx';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [invalidMessage,setInvalidMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  }
  const handleButtonClick = () =>{
    const message=checkValidData(email.current.value,password.current.value);
    setInvalidMessage(message);
  }
  return (
    <div className='relative w-full h-screen bg-center bg-cover' style={{ backgroundImage: `url("https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/08/netflix-logo.jpeg")` }}>
      <Header></Header>
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className='absolute bg-gray-950/80  w-[calc(30%)] h-[calc(70%)] flex flex-col justify-center items-center m-auto inset-0 rounded-xl'>
        <h1 className='font-bold text-white text-2xl p-2 w-70'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn ? <input type="text" placeholder="Full Name" className='text-white p-2 m-2 bg-gray-800 w-70'></input> : ""}
        <input ref={email} type="text" placeholder="Email Address" className='text-white p-2 m-2 bg-gray-800 w-70'></input>
        <input ref={password} type="password" placeholder="Password" className='text-white p-2 m-2  bg-gray-800 w-70'></input>
        {invalidMessage ? <p className='text-red-500'>{invalidMessage}</p> : ""}
        <button className='p-4 m-4 text-white bg-red-500 w-70 font-bold hover:bg-red-900 transition' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <div className='mt-2 text-white w-70 font-bold'>
          <p onClick={handleToggle} className='hover:text-gray-500 cursor-pointer transition'>{isSignIn ? "Are You New To Netflix? Sign Up" : "Already A Member? Sign In"}</p>
        </div>
      </form>
    </div>
  )
}

export default Login