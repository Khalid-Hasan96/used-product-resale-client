import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddaProduct from "../../Pages/Dashboard/AddaProduct/AddaProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import LoadProducts from "../../Pages/Home/ProductCategories/LoadProducts";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            errorElement: <DisplayError></DisplayError>,
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
                        loader: ({ params }) => fetch(`https://used-products-resale-server-khalid-hasan96.vercel.app/products/${params.id}`)
                  }

            ]
      },
      {
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            errorElement: <DisplayError></DisplayError>,
            children: [
                  {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                  },
                  {
                        path: '/dashboard/allusers',
                        element: <AllUsers></AllUsers>
                  },
                  {
                        path: '/dashboard/allseller',
                        element: <AllSeller></AllSeller>
                  },
                  {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers></AllBuyers>
                  },
                  {
                        path: '/dashboard/addproduct',
                        element: <AddaProduct></AddaProduct>
                  },
                  {
                        path: '/dashboard/myproducts',
                        element: <MyProduct></MyProduct>
                  },
                  {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>
                  },
            ]
      }
]);

export default router;
