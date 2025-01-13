import { useRef, useState } from "react"
import Header from "./Header"
import {checkValiDate} from "../utils/checkValidation"
import { avatar, background } from "../utils/constants"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    
    const[isLoginForm, setIsLoginForm]= useState(false)
    const[errorMsg, setErrorMsg]= useState(null);
    
    const dispatch= useDispatch();
    
    const name= useRef(null)
    const email= useRef(null)
    const password= useRef(null)

    const handleSubmit = () =>{
      // const emailValue = email.current?.value || "";
      // const passwordValue = password.current?.value || "";
      // const nameValue = isLoginForm ? "" : name.current?.value || ""; 

        const message= checkValiDate(email.current.value, password.current.value)

        setErrorMsg(message)

        if(message) return;

        //signup and signin logic

        if(!isLoginForm){
          //signup logic
          
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

              updateProfile(user, {
                displayName: name.current.value, photoURL:avatar  //{avatar}
                

              }).then(() => {
                // Profile updated!
                // ...
                const{ uid, email, displayName, photoURL}=auth.currentUser;
                
                dispatch(addUser({
                  uid:uid,
                  email:email, 
                  displayName:displayName, 
                  photoURL:photoURL}))

                

              }).catch((error) => {
                setErrorMsg(error.message)
              });
              
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode + "-" + errorMessage);
              // ..
            });

        }else{
          //Sign In logic
          
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user; 

            
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode +"-" + errorMessage)
            });

        }
        
    }



  return (
    <div >
        <Header/>

        <div className="absolute">
        <img
          src={background}
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

            <p className="py-4 cursor-pointer" onClick={(e) => setIsLoginForm((user) => !user)}>{isLoginForm ? "New user Sign Up here" :"Existing User? Login here"}</p>

        </form>
    </div>
  )
}

export default Login;