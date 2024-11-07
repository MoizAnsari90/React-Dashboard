
'use client'

import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig.js"; 
import "../../firebaseConfig"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ModuleSignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const router = useRouter();
 

  const inputHandle = (data) =>{
    
    const {email, password} = data
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    router.push('/auth/SignIn');
    console.log(user , "user")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , "errorCode")
    console.log(errorMessage , "errorMessage")
    // ..
  });

  }
  
  useEffect(()=>{
    const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } 
  });
  })


  return (
    
    <div className="flex justify-center items-center  h-[100vh]">
    <div className="bg-gray-500  h-[350px] w-[400px] rounded-lg">
      <form className="flex justify-center  items-center mt-10 flex-col" onSubmit={handleSubmit(inputHandle)}>
      <h1 className="text-4xl py-4 font-bold">Sign-Up Form</h1>
      <h2 className="text-left font-bold" >Email</h2>
      <input className="border-2 w-[250px]" {...register("email" , { required: true })} placeholder="email" />
      {errors.email && <span>This field is required</span>}
      <h2 className="text-left font-bold">Password</h2>
      <input className="border-2 w-[250px]" {...register("password", { required: true })} placeholder="password" />
      {errors.password && <span>This field is required</span>}
      <input className="border-2 mt-5 w-[80px] font-bold bg-white" type="submit" />
      </form>
    </div>
    </div>
  );
}










// const ModuleSignUp = () => {
//   return (
//     <div>
//       <h1>SignUp</h1>
//       <Link href="pages/auth/SignIn">Pakistan</Link>
//     </div>
//   );
// }

// export default ModuleSignUp;
