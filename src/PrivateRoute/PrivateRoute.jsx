

// const PrivateRoute = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PrivateRoute;


import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
        return  <div className="flex justify-center items-center"><span className=" loading loading-spinner text-error"></span></div>
    }
    else{
        
        if(user?.email){
            return children;
        }
        else{
            // return <Navigate state={location.pathname} to="/login"></Navigate>
            // return <Navigate to="/login" state={{from:location}} replace ></Navigate>
            return <Navigate to="/login" state={{from: location}} replace></Navigate>
        }
    }
    

};

export default PrivateRoute;