import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    // const totalSalary = data.reduce((total,item)=> total+ parseFloat(item.salary),0)
    // console.log(totalSalary)

    // const location = useLocation()
    // const {employeeItem}= location.state || {}
    // const {salary,email,month,year} = employeeItem || {}
    // const [payments,refetch] = useCart()
    // const totalSalary = payments.reduce((total,item)=> total+ parseFloat(item.salary),0)
    return (
       <section>
         <Helmet>
        <title>
        Soft Impact || Payment
        </title>
    </Helmet>
        <div>
            <h2 className="text-center text-3xl"> {data.salary}</h2>
            {/* <h2 className="text-center text-3xl"> {totalSalary}</h2> */}

            <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm data={data}></CheckOutForm>
            </Elements>
            </div>
        </div>
       </section>
    );
};

export default Payment;