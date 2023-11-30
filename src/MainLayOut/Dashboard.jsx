import {  NavLink, Outlet } from "react-router-dom";
import useHr from "../hooks/useHr";
import useAdmin from "../hooks/useAdmin";
import useEmployee from "../hooks/useEmployee"
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const [isHr] = useHr();
    const [isAdmin] = useAdmin()
    const [isEmployee] = useEmployee()
    return (
       <section>
         <Helmet>
        <title>
        Soft Impact || Dashboard
        </title>
    </Helmet>
        <div className="flex">
            <div className="w-64 min-h-full  bg-[#1976D2] ">
            <ul className="menu text-white font-medium ">
                  
                    

            {
                isHr ? 
                <>
                <div className="text-center text-xl">
                        HR Home
                       </div>
                       <div className="divider"></div> 
                <li>
                        <NavLink to="/dashboard/employeeList">Employee List</NavLink>
                    </li>    
                <li>
                        <NavLink to="/dashboard/HrPayment">Payment History</NavLink>
                    </li>    
                </>
                :
               
                <>
                 
                </>
            } 

            {
                isAdmin ? 
                <>
                <div className="text-center text-xl">
                        Admin Home
                       </div>
                       <div className="divider"></div> 
                    <li>
                        <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                        </li> 
                </>
                :
                <>
                </>
            }
            {
                isEmployee ? 
                <>
                       
                       <div className="text-center text-xl">
                        User Home
                       </div>
                       <div className="divider"></div> 
                        {/* <li>
                        <NavLink to="/dashboard/paymentHistory"> Payment History</NavLink>
                    </li> */}
                        <li>
                        <NavLink to="/dashboard/worksheet"> WorkSheet</NavLink>
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
       </section>
    );
};

export default Dashboard;