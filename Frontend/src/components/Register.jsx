import  { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

   
const Register = () => {
    const navigate = useNavigate()

  const { registerUser, signInWithGoogle } = useAuth()

     const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    // register user

    const onSubmit =async (data) => {
      console.log(data)
      try {
        await registerUser( data.email, data.password)
        alert("User registered successfully!")
      } catch (error) {
        setMessage("please provide a valid email and password")
      }

    }

  const [message, setMessage] = useState('');

const handleGoolgeSignIN = async ()=>{
   try {
      await signInWithGoogle ()
         alert('Register is successful!')
         navigate('/')
    } catch (error) {
       alert("Google sign in failed.")
        console.log(error)
      
    }
    
}
  return (
    <div className="h-[calc(100vh-120px)]   flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-bold mb-2 text-gray-700 text-sm block"
            >
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address "
              {...register("email", { required: true })}
              className="border rounded px-2 shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-bold mb-2 text-gray-700 text-sm block"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="border rounded px-2 shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm ">
          Have an account? please
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
        {/*  */}
        {/*  */}
        {/* google log in butthon  */}
        <div className="mb-4">
          <button
            onClick={handleGoolgeSignIN}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2 " />
            Sign in with Google
          </button>
        </div>
        <p>@2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Register