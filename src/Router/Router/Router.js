import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import LoadProducts from "../../Pages/Home/ProductCategories/LoadProducts";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/blog',
                        element: <Blog></Blog>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/signup',
                        element: <Signup></Signup>
                  },
                  {
                        path: '/category/:id',
                        element: <LoadProducts></LoadProducts>,
                        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
                  }

            ]
      },
      {
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children: [
                  {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                  },
                  {
                        path: '/dashboard/allusers',
                        element: <AllUsers></AllUsers>
                  },
            ]
      }
]);

export default router;
