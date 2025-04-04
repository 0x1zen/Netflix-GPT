Features:-
    -Login/Signup Page:-
        -Signin/SIgnup form
        -Redirect to browser Page
    -Signup Form
    -Form Validation
    -Browse:-
        -Header
        -Main Movie
            -Trailer in the background
            -TItle and Description
            -Movie Suggestions
                -movies list
    -Netflix GPT:-
        -Seach Bar
        -Movies Sugesstions 

Notes:-

-In a scenario where you want to get email,password from input boxes either you can use
    1.State Variables or
    2.useRef

***useRef can be used to get a reference of the input boxes.

How do we use useRef:-
const email=useRef(null);
-here null is the initial value.
<!-- <input ref={email} placeholder="Email"> -->

How to deploy using firebase:-
npm i -g firebase-tools (fore firebase cli tools)
npm install firebase

create a firebase.js file in utils.

Build npm run build 

run firebase init and set the public directory as dist for vite

and the run firebase deploy

