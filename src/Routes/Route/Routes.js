import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseCatagory from "../../Pages/CourseCatagory/CourseCatagory";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Signin from "../../Pages/Signin/Signin";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<AllCourses></AllCourses>,
                loader:()=>fetch('https://hablu-learner-server.vercel.app/courses')
            },
            {
                path:'/category/:id',
                element:<CourseCatagory></CourseCatagory>,
                loader:({params}) => fetch(`https://hablu-learner-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path:'/courses/:id',
        element:<Courses></Courses>,
        loader:({params}) => fetch(`https://hablu-learner-server.vercel.app/courses/${params.id}`)
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
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'*',
        element: <div> <h1> Nothing  here </h1> </div>
    },
    {
        path:'/blog',
        element: <Blog></Blog>
    },
    {
        path:'/FAQ',
        element:<FAQ></FAQ>
    },
    {
        path:'/profile',
        element:<UserProfile></UserProfile>
    }
])