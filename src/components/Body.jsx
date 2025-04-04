import React, { useEffect } from "react";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.jsx";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login></Login>,
        },
        {
            path: "browse",
            element: <Browse></Browse>,
        },
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName ,photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }),
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div className="">
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
