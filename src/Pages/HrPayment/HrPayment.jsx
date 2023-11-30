import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const HrPayment = () => {

    const axiosSecure = useAxiosSecure()
    const { data:payment = [],refetch} = useQuery({
        queryKey:["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment')
            return res.data
        }
    })
    console.log(payment)
    return (
       <section>
          <div className="overflow-x-auto" >
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Email</th>
              <th>Month</th>
              <th>year</th>  
              <th>Salary</th>  
              <th>transactionId</th>  
            </tr>
          </thead>
          <tbody>
            {payment && payment.map((payment) => (
              <tr key={payment._id}>
                <td >{payment.email}</td>
                <td >{payment.month}</td>          
                <td >{payment.year}</td>          
                <td >{payment.salary}</td>          
                <td >{payment.transactionId}</td>          
                        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </section>
    );
};

export default HrPayment;