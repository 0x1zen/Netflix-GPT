import React from 'react'
import Header from './Header.jsx'
import { NETFLIX_BG } from '../utils/constants.jsx';

const Login = () => {
  return (
    <div className='relative w-full h-screen bg-center bg-cover' style={{ backgroundImage: `url("https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/08/netflix-logo.jpeg")` }}>
      <Header></Header>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }} className='absolute bg-gray-950  w-[calc(30%)] h-[calc(70%)] flex flex-col justify-center items-center m-auto inset-0 rounded-xl'>
        <h1 className='font-bold text-white text-2xl p-2 w-50'>Sign In</h1>
        <input type="text" placeholder="Email Address" className='text-white p-2 m-2 bg-gray-800 w-50 rounded-l'></input>
        <input type="text" placeholder="Password" className='text-white p-2 m-2  bg-gray-800 w-50 rounded-l'></input>
        <button className='p-4 m-4 text-white bg-red-500 w-50'>Sign In</button>
      </form>
    </div>
  )
}

export default Login