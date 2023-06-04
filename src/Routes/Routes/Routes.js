import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Apoinment from "../../Pages/Apoinment/Apoinment/Apoinment";

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
            }
        ]
    }
])