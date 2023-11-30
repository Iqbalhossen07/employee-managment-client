
// const AuthProvider = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AuthProvider;

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const axiosPublic = useAxiosPublic()

   
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

   
 
    

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    const userInfo = {
        createUser,
        signUser,
        user,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
       
        </AuthContext.Provider>
    );
};

export default AuthProvider;