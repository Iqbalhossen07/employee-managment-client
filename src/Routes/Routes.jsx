import { createBrowserRouter } from "react-router-dom";
import MainLaOut from "../MainLayOut/MainLaOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../MainLayOut/Dashboard";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import HrPrivate from "../PrivateRoute/HrPrivate";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLaOut></MainLaOut>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
            },
            {
                path:"/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: "EmployeeList",
                element: <HrPrivate><EmployeeList></EmployeeList></HrPrivate>,
               
            },
            // admin routes
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            }
        ]
    }
])

export default router;