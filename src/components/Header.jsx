import { useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="absolute z-10 flex w-full justify-between text-white px-8 py-2 bg-gradient-to-b  from-black">
            <div>
                <img className="w-40 h-10" src={NETFLIX_LOGO} alt="logo"></img>
            </div>
            {user?.photoURL && (
                <div className="flex">
                    <img className="w-10 mr-2" src={user?.photoURL}></img>
                    <button
                        className="bg-red-600 font-bold p-2 rounded-xl"
                        onClick={handleSignout}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
