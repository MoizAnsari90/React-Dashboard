'use client'

import { getAuth, signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebaseConfig.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";





const Header = () => {

  const router = useRouter()

    const handleSignOut = (user) =>{
        const authentic = getAuth();
        signOut(auth).then(() => {
          if(user){
            console.log("Sign-out successful")
            router.push("/");
          }
        }).catch((error) => {
          // An error happened.
        });
    }

    useEffect(()=>{
      const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/')
    } 
    });
    }) 
              
  return (
    <div className="bg-slate-900 text-white w-full h-16 flex items-center justify-evenly ">
       
          <h1>Header</h1>
          <button onClick={handleSignOut}>SignOut</button>
       
    </div>
  );
}

export default Header;
