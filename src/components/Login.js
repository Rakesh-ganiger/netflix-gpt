import { useRef, useState } from "react"
import Header from "./Header"
import {checkValiDate} from "../utils/checkValidation"

const Login = () => {
    
    const[isLoginForm, setIsLoginForm]= useState(false)
    const[errorMsg, setErrorMsg]= useState();
    
    const name= useRef(null)
    const email= useRef(null)
    const password= useRef(null)

    const handleSubmit = () =>{

        const message= checkValiDate(email.current.value ,password.current.value, name.current.value)
        setErrorMsg(message)
    }



  return (
    <div >
        <Header/>

        <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        </div>

        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4">{isLoginForm ? "Sign In" : "Sign Up"}</h1>

            {!isLoginForm && (
                <>
            
            
            <input type="text"
             ref={name}
             placeholder="Enter your name"
             className="p-4 my-4 w-full bg-gray-800"
             
            />
            </>)}
            

            <input type="text"
             ref={email}
             placeholder="Email adress"
             className="p-4 my-4 w-full bg-gray-800"
             
            />

            <input type="password"
             ref={password}
             placeholder="Password"
             className="p-4 my-4 w-full bg-gray-800"
             
            />
            
            <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>

            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmit}>{isLoginForm ? "Sign In" :"Sign Up" }</button>

            <p className="py-4 cursor-pointer" onClick={(e) => setIsLoginForm((user)=>!user)}>{isLoginForm ? "New user Sign Up here" :"Existing User? Login here"}</p>

        </form>
    </div>
  )
}

export default Login