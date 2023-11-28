import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ImCross } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useEmployees from "../../../hooks/useEmployees";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);



const EmployeeList = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [salary,setSalary] = useState('')
  const [email,setEmail] = useState('')


    const axiosSecure = useAxiosSecure()
    const [users,refetch] = useEmployees()


    // const { data:users = [],refetch} = useQuery({
    //     queryKey:["users"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users')
    //         return res.data
    //     }
    // })
    
const filterData = users.filter(employeeList=> employeeList.role === "employee")





const handlePay = (salary,email) => {
  setSalary(salary)
  setEmail(email)
  document.getElementById('my_modal_5').showModal()
};


const handlePayButton = async (e)=>{
  e.preventDefault()
  // const email =email;
  // const salary =salary;
  const form = e.target
  const month = form.month.value;
  const year = form.year.value;
  console.log(salary,email,month,year)
  const employeeItem = {salary,email,month,year}


  const menuRes = await axiosSecure.post('/payments',employeeItem)
  if(menuRes.data.insertedId){
    //   toast.success("Added Successfully")
    //   swal("Good job!", "Create Successfully!", "success");
      console.log(menuRes.data)
  }

    

}





    const handleMakeverified = (filterData) => {
        console.log(filterData)
        axiosSecure
          .patch(`/users/verified/${filterData._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              swal(`${filterData.name} is an Verified `, {
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error making user verified:", error);
            // Handle error, show an alert, etc.
          });
      };
 

  
      
    
    return (
       <section>
        <div className="overflow-x-auto" >
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th>Pay</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filterData && filterData.map((employee) => (
              <tr key={employee._id}>
                <td >{employee.name}</td>
                <td >{employee.email}</td>
                {/* <td>{employee.verified}</td> */}
                {employee.verified === 'False' ? <td><button onClick={()=>handleMakeverified(employee)} className="btn "><ImCross className="text-red-600"></ImCross></button> </td> : <td><button  className="btn"><FaCheckCircle className="text-green-500"></FaCheckCircle></button></td>}
                <td>{employee.bankAccount}</td>
                <td>${employee.salary}</td>
               
                
                
                  <td> {/* Open the modal using document.getElementById('ID').showModal() method */}
                  {employee.verified === 'False' ? <button disabled className="btn">Pay</button> : 
                  <button className="btn" onClick={()=>handlePay(employee.salary,employee.email)}>Pay</button>
                   }

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Welcome!</h3>
          <form onSubmit={handlePayButton} className="w-80 md:w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary</span>
              </label>
              <input readOnly
                value={`$${salary}`}
                // Use a template string to set a unique default value for each employee
                name="salary"
                type="text"
                placeholder="Salary"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input readOnly
                value={email}
                // Use a template string to set a unique default value for each employee
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <input
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                name="month"
                type="text"
                placeholder="Month"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                name="year"
                type="text"
                placeholder="Year"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control mt-6 mb-3">
              <button 
                type="submit"
                className="btn bg-[#26917C] hover:bg-[#26917C] text-white"           
                
              >
                Pay
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById('my_modal_5').close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog></td>
                  
                

                <td>  <Link to=''>
                  <td> <button className="btn">Details</button></td>
                </Link></td>
                
              
                

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </section>
    );
};

export default EmployeeList;