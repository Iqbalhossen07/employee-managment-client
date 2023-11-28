
// const HrPrivate = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default HrPrivate;


import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useHr from "../hooks/useHr";

const HrPrivate = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isHr,isHrLoading] = useHr()
    const location = useLocation()
    // console.log(location.pathname)
    if(loading || isHrLoading){
        return  <div className="flex justify-center items-center"><span className=" loading loading-spinner text-error"></span></div>
    }
    else{
        
        if(user && isHr){
            return children;
        }
        else{
            // return <Navigate state={location.pathname} to="/login"></Navigate>
            // return <Navigate to="/login" state={{from:location}} replace ></Navigate>
            return <Navigate to="/login" state={{from: location}} replace></Navigate>
        }
    }
    

};

export default HrPrivate;