import {  NavLink, Outlet } from "react-router-dom";
import useHr from "../hooks/useHr";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isHr] = useHr();
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400 ">
            <ul className="menu text-gray-600 font-medium ">
                  
                    

            {
                isHr ? 
                <>
                <li>
                        <NavLink to="/dashboard/employeeList">Employee List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">  Add Employee</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">  Manage Employee</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">  Manage Employee</NavLink>
                    </li>
                </>
                :
               
                <>
                 
                </>
            } 

            {
                isAdmin ? 
                <>
                    <li>
                        <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                        </li>
                       
                   
                    <li>
                        <NavLink to="/dashboard/manageBookings">  Manage Bookings</NavLink>
                    </li>
                   
                   
                     
                </>
                :
                <>
                </>
            }
         


                    <li>
                        <NavLink to="/">  Home</NavLink>
                        </li>
                      
                   
                   
                    
                    
                   
                  
                   
                  
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;