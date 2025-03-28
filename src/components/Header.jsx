import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className='absolute z-10 flex w-full justify-between text-white px-8 py-2 bg-gradient-to-b  from-black'>
        <div>
            <img className='w-40 h-10' src={NETFLIX_LOGO} alt="logo"></img>
        </div>
    </div>
  )
}

export default Header;