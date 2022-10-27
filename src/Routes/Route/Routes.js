import { createBrowserRouter } from "react-router-dom";
import OrderBtn from "../../Button/OrderBtn";
import Main from "../../layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseCatagory from "../../Pages/CourseCatagory/CourseCatagory";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Signin from "../../Pages/Signin/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/courses')
            },
            {
                path:'/category/:id',
                element:<CourseCatagory></CourseCatagory>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'/courses/:id',
        element:<Courses></Courses>,
        loader:({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/signIn',
        element:<Signin></Signin>
    },
    {
        path:'/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
    }
])