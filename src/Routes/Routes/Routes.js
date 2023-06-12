import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Apoinment from "../../Pages/Apoinment/Apoinment/Apoinment";
import Login from "../../Pages/Login/Login";
import Sginup from "../../Pages/SginUp/Sginup";

export const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Apoinment></Apoinment>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sginup',
                element:<Sginup></Sginup>

            }
        ]
    }
])