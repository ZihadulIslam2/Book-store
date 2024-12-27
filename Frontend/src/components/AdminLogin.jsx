import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios  from 'axios';
import getBaseUrl from './../utils/baseUrl';

const AdminLogin = () => {

      const [message, setMessage] = useState('')

      const navigate = useNavigate()
      
      const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()

        const onSubmit = async (data) => {
          console.log(data)
         try {
           console.log('Sending login request with data:', data)
           const response = await axios.post(
             `${getBaseUrl()}/api/auth/admin`,
             data,
             {
               headers: {
                 'Content-type': 'application/json',
               },
             }
           )
           console.log('Login response:', response.data)
           const auth = response.data
           if(auth.token) {
            localStorage.setItem('token', auth.token)
            setTimeout(()=>{
              localStorage.removeItem('token')
              alert("Token has been expired, Please login again.")
              navigate('/')
            }, 3600*1000 )
           }

           alert("Admin login Successful!")

           navigate('/dashboard')
         } catch (error) {
           console.error('Error during login:', error)
           setMessage('Please provide a valid email and password')
         }

        }
        
  return (
    <div className="h-[calc(100vh-120px)]   flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-bold mb-2 text-gray-700 text-sm block"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name "
              {...register('username', { required: true })}
              className="border rounded  shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
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
              {...register('password', { required: true })}
              placeholder="password"
              className="border rounded  shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>

        <p>@2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  )
}

export default AdminLogin