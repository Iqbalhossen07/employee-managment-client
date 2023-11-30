// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


// const PaymentHistory = () => {
//     const {user} = useContext(AuthContext)
//     const axiosSecure = useAxiosSecure();

//     const { data: payment = [] } = useQuery({
//         queryKey: ['payment', user.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/payment/${user.email}`)
//             return res.data;
//         }
//     })
//     return (
//         <section>
//         <div className="overflow-x-auto" >
//         <table className="table">
//           <thead>
//             <tr className="bg-[#2B2D42] text-white">
//               <th>Month</th>
//               <th>Amount</th>
//               <th> Transaction Id</th>  
//             </tr>
//           </thead>
//           <tbody>
//             {payment && payment.map((payment) => (
//               <tr key={payment._id}>
//                 <td >{payment.month}</td>
//                 <td >{payment.salary}</td>          
//                 <td >{payment.transactionId}</td>          
                        
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//        </section>
//     );
// };

// export default PaymentHistory;