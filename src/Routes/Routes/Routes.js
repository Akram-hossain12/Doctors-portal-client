import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Apoinment from "../../Pages/Apoinment/Apoinment/Apoinment";
import Login from "../../Pages/Login/Login";
import Sginup from "../../Pages/SginUp/Sginup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import DashbordLayout from "../../Layout/DashbordLayout";
import MyAppointment from "../../Pages/Dashbord/MyAppointment/MyAppointment";

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

            },
   
        ]
    },
    {
        path:'/dashbord',
        element:<DashbordLayout></DashbordLayout>,
        children:[
            {
                path:'/dashbord',
                element:<MyAppointment></MyAppointment>

            }
        ]
    }
])