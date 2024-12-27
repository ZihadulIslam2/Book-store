import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CartPage from '../pages/books/CartPage'
import CheckOutPage from '../pages/books/CheckOutPage'
import CheckOutPage2 from '../pages/books/CheckOutPage2'
import SingleBook from '../pages/books/SingleBook'
import PrivateRoute from './PrivateRoute'
import OrderPage from '../pages/books/orderPage'
import AdminRoutes from './AdminRoutes'
import AdminLogin from '../components/AdminLogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <div>About page</div>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <CheckOutPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/admin',
        element: <AdminLogin />,
      },
      {
        path: '/checkout2',
        element: <CheckOutPage2 />,
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
      },
      {
        path: '/dashboard',
        element: <AdminRoutes />, // AdminRoutes guards the dashboard path
        children: [
          {
            path: '', // Default child route for /dashboard
            element: <div>Dashboard Home</div>, // Content for the dashboard home
          },
          {
            path: 'add-new-book',
            element: <div>Add new book</div>, // Content for adding a new book
          },

          {
            path: 'edit-book/:id',
            element: (
              <AdminRoutes>
                <div>Edit book</div>
              </AdminRoutes>
            ),
          },
          {
            path: 'manage-books',
            element: (
              <AdminRoutes>
                <div>Manage books</div>
              </AdminRoutes>
            ),
          },
        ],
      },
    ],
  },
])

export default router
