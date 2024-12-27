// import  { Children } from 'react'
// import { Navigate, Outlet } from 'react-router-dom';

// const AdminRoutes = () => {
//     const token = localStorage.getItem("token");
    
//     if(!token) {
//         return <Navigate to="/admin" />
//     }
//     return Children ? Children: <Outlet/>
// }

// export default AdminRoutes

import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/admin" />
  }
  return <Outlet />
}

export default AdminRoutes
