import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validation";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] =useState('') 

  const toggleSignIn = () => {
    setIsSignInForm(!IsSignInForm);
  };

  const email = useRef(null);
  const Password = useRef(null);
  const fullName = useRef(null)


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,Password.current.value)
    seterrorMessage(message)
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
            alt="BG-Image"
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 "
        >
          <h1 className="font-bold text-3xl text-white ">
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignInForm && (
            <input
              ref={fullName}
              type="text"
              name=""
              placeholder="Full Name"
              className=" bg-gray-700 p-4 my-8 w-full text-white "
              id=""
            />
          )}
          <input
            ref={email}
            type="text"
            name=""
            placeholder="Email"
            className=" bg-gray-700 p-4 my-8 w-full text-white"
            id=""
          />
          <input
            ref={Password}
            type="password"
            name=""
            placeholder="Password"
            className=" bg-gray-700 p-4 text-white w-full"
            id=""
          />
          <p className="text-red-600 my-4 font-bold " >
            {errorMessage}
          </p>
          <button
            onClick={handleButtonClick}
            className="p-4 my-6 bg-red-600 w-full "
          >
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignIn} className="text-white py-4 curor-pointer ">
            {IsSignInForm
              ? "New to Netflix? Sign up Now"
              : "Already a Member! Sign in Now "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
