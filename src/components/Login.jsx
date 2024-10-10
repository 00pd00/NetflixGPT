import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [IsSignInForm, setIsSignInForm  ] = useState(true)

  const toggleSignIn = () => {
    setIsSignInForm(!IsSignInForm)
  }

  return (
   <>
     <div>      
        <Header/>
        <div className='absolute' >
        <img src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="BG-Image" />
      </div>
    
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 '>
        <h1 className='font-bold text-3xl text-white ' >{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !IsSignInForm && <input type="text" name="" placeholder='Full Name' className=' bg-gray-700 p-4 my-8 w-full' id="" />}
        <input type="text" name="" placeholder='Email' className=' bg-gray-700 p-4 my-8 w-full' id="" />
        <input type="password" name="" placeholder='Password' className=' bg-gray-700 p-4  w-full' id="" />
        <button className='p-4 my-6 bg-red-600 w-full ' >{IsSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignIn} className='text-white py-4 cursor-pointer ' >{IsSignInForm ? "New to Netflix? Sign up Now" : "Already a Member! Sign in Now "}</p>
      </form>
     </div>
   </>
  )
}

export default Login