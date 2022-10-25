import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCatagory from "../../Pages/CourseCatagory/CourseCatagory";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagory/:id',
                element:<CourseCatagory></CourseCatagory>
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>
            }
        ]
    }
])