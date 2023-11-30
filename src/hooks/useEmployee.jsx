
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";




const useHr = () => {
    const { user,loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is HR', user)
            const res = await axiosSecure.get(`/users/employee/${user.email}`);
            // console.log(res.data);
            return res.data?.employee;
        }
    })
    return [isEmployee,isEmployeeLoading]
};

export default useHr;