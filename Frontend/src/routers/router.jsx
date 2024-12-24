import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from '../pages/books/CartPage';
import CheckOutPage from "../pages/books/CheckOutPage";
import CheckOutPage2 from "../pages/books/CheckOutPage2";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/orderPage";
import AdminRoutes from "./AdminRoutes";


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
        path: '/checkout2',
        element: <CheckOutPage2 />,
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
      },
      {
        path:'/dashboard',
        element: <AdminRoutes/>,
        children:[
          {
            path:"",
            element: <div>Dashboard Home</div>
          },
          {
            path:"add-new-book",
            element: <div>Add new book</div>
          },
          {
            path:"edit-book/:id",
            element: <div>Edit book</div>
          },
          {
            path:"manage-books",
            element: <div>Manage books</div>
          },
        ]
      }
    ],
  },
])

export default router;
