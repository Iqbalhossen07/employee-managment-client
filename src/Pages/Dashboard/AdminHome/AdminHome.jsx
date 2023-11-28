import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import swal from "sweetalert";
import useEmployees from "../../../hooks/useEmployees";


const AdminHome = () => {
    const [users,refetch] = useEmployees()
    const axiosSecure = useAxiosSecure()
    // const { data:users = [],refetch} = useQuery({
    //     queryKey:["users"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users')
    //         return res.data
    //     }
    // })
    
const filterData = users.filter(employeeList=> employeeList.verified === 'true')


// make HR
const handleMakeHr = user =>{
    axiosSecure.patch(`/users/Hr/${user._id}`)
    .then(res=>{
      if(res.data.modifiedCount > 0 ){
        refetch()
        swal(`${user.name} is an HR`, {
          icon: "success",
        });
        
       
      }
    })
  }

// make Fire
const handleMakeFire = user =>{
    axiosSecure.patch(`/users/fire/${user._id}`)
    .then(res=>{
      if(res.data.modifiedCount > 0 ){
        refetch()
        swal(`${user.name} is an Fire`, {
          icon: "error",
        });
        
       
      }
    })
  }
    return (
        <section>
        <div className="overflow-x-auto" >
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Name</th>
              <th>Designation</th>
              <th> Make HR</th>
              <th>Fire</th>
             
            </tr>
          </thead>
          <tbody>
            {filterData && filterData.map((employee) => (
              <tr key={employee._id}>
                <td >{employee.name}</td>
                <td >{employee.designation}</td>
                {employee.role === 'hr' ? <td> <button className="btn bg-green-600 hover:bg-green-500">HR</button></td> : <td><button onClick={()=>handleMakeHr(employee)} className="btn bg-orange-500 hover:bg-orange-500">Make HR</button></td>}
                {employee.fire === 'fire' ? <td> <button className="btn bg-green-600 hover:bg-green-500">Fire</button></td> : <td><button onClick={()=>handleMakeFire(employee)} className="btn bg-orange-500 hover:bg-orange-500">Fire Now</button></td>}
                {/* <td><button className="btn">Fire</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </section>
    );
};

export default AdminHome;