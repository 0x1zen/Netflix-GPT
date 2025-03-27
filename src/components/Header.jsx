import React from 'react'

const Header = () => {
  return (
    <div className='absolute flex m-2 justify-between'>
        <div>
            <img className='w-10 h-10' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'></img>
        </div>
        <ul className='flex'>
            <li>Home</li>
            <li>GPT</li>
            <li>Login</li>
        </ul>
    </div>
  )
}

export default Header;