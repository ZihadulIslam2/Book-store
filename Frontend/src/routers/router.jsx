import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from '../pages/books/CartPage';
import CheckOutPage from "../pages/books/CheckOutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <div>Order page</div>,
      },
      {
        path: "/about",
        element: <div>About page</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path:"/checkout",
        element: <CheckOutPage/>
      },
    ],
  },
]);

export default router;
