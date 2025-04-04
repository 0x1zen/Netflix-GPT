import { useRef } from "react";
import Header from "./Header.jsx";
import { NETFLIX_BG } from "../utils/constants.jsx";
import { useState } from "react";
import { checkValidData } from "../utils/validate.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setInvalidMessage(message);
    if (message) return;

    if (isSignIn) {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            setInvalidMessage(errorMessage);
          }
        });
    } else {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg",
          })
            .then(() => {
              // Clear input fields and update state after profile update
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              console.log("Update Profile Error:", error);
            })
            .then(() => {
              // email.current.value = "";
              // password.current.value = "";
              // setIsSignIn(!isSignIn);
              // setInvalidMessage("Registered Successfully! Please Login");
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            setInvalidMessage(errorMessage);
          }
        });
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url("https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/08/netflix-logo.jpeg")`,
      }}
    >
      <Header></Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-gray-950/80  w-[calc(30%)] h-[calc(70%)] flex flex-col justify-center items-center m-auto inset-0 rounded-xl"
      >
        <h1 className="font-bold text-white text-2xl p-2 w-70">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="text-white p-2 m-2 bg-gray-800 w-70"
          ></input>
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="text-white p-2 m-2 bg-gray-800 w-70"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white p-2 m-2  bg-gray-800 w-70"
        ></input>
        {invalidMessage ? <p className="text-red-500">{invalidMessage}</p> : ""}
        <button
          className="p-4 m-4 text-white bg-red-500 w-70 font-bold hover:bg-red-900 transition"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="mt-2 text-white w-70 font-bold">
          <p
            onClick={handleToggle}
            className="hover:text-gray-500 cursor-pointer transition"
          >
            {isSignIn
              ? "Are You New To Netflix? Sign Up"
              : "Already A Member? Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
