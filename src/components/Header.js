import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { logo } from "../utils/constants";

const Header = () => {
  const navigate= useNavigate();
  const user= useSelector((store) => store.user)
  const dispatch=useDispatch()
   const handleSignout= () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      
      
    }).catch((error) => {
      // An error happened.
      navigate("./error")
    });
   }
   useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const{uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse")

            
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
      return () =>unSubscribe();

},[])

    return (
      <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src={logo}
          alt="logo"
        />
       {user ? (
  <div className="flex p-2">
    <img className="w-12 h-12" alt="usericon" src={user?.photoURL || "/default-user-icon.png"} />
    <button onClick={handleSignout} className="font-bold text-white border-spacing-0 ">
      (Sign Out)
    </button>
  </div>
) : null}

      </div>
    );
  };
  export default Header;