import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const [payments,refetch] = useCart()
    const totalSalary = payments.reduce((total,item)=> total+ parseFloat(item.salary),0)
    return (
        <div>
            <h2 className="text-center text-3xl"> {payments.length}</h2>
            <h2 className="text-center text-3xl"> {totalSalary}</h2>

            <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;