import { useState } from "react"
import React from 'react'

export default function Login() {

    const [email, setemail] = useState(" ")
    const [password, setpassword] = useState(" ")

    const handleemail =(e)=>{
        setemail(e.target.value);
        
    }
    
    const handlepassword =(e)=>{
        setpassword(e.target.value);
    }
    
    const submitHandler =(e)=>{   
        // check function is running or not 
        // console.log("form submited");
        
        // prevent form on siubmit

        e.preventDefault();
        console.log("email is : ",email);
        console.log("passsword is :",password)

        // now we remove the current field after clicking on logedin
        setemail("")
        setpassword("")
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>
                <input value={email} required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-gray-100' type="email" placeholder='Enter Your Email' onChange={handleemail} />
                <input value={password} required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-3 text-xl rounded-full mt-3 placeholder:text-white' type="password" placeholder='Enter password' onChange={handlepassword}/>
                <button className='text-white mt-5 border-none outline-none border-2  bg-emerald-600 py-3 px-5 text-xl rounded-full'>Log in</button>
            </form>
        </div>
        
    </div>
  )
}
