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
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Dashboard/EmployeeList/Payment";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import EmployeesDetails from "../Pages/EmployeesDetails/EmployeesDetails";
import WorkSheet from "../Pages/WorkSheet/WorkSheet";
import Contact from "../Pages/Contact/Contact";

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
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // hr routes
            {
                path: "EmployeeList",
                element: <HrPrivate><EmployeeList></EmployeeList></HrPrivate>,
               
            },
            {
                path: "employeesDetails/:id",
                element: <EmployeesDetails></EmployeesDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/payment/${params.id}`)
            },
            // admin routes
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/payments/${params.id}`)
                

            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "worksheet",
                element: <WorkSheet></WorkSheet>
            },
           
        ]
    }
])

export default router;