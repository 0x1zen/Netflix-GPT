import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className='absolute flex m-2 justify-between'>
        <div>
            <img className='w-10 h-10' src={NETFLIX_LOGO}></img>
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