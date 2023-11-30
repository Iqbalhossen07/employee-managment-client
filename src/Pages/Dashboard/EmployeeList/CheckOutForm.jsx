import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const CheckOutForm = ({data}) => {
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId,setTransactionId] = useState("")
  const {salary,_id,month,year,email,name,designation,image} = data;
  console.log(data)

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event)=>{
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

           // Get a reference to a mounted CardElement. Elements knows how
          // to find your CardElement because there can only ever be one of
          // each type of element.
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

                   // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      // setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // setError('')
    } 

   // confirm payment
const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: user?.name,
        email:user?.email,
      },
    },
  },
  
);
if(confirmError){
  console.log('confirm Error')
}else{
  console.log('payment successful',paymentIntent)

  if(paymentIntent.status === 'succeeded'){
    setTransactionId(paymentIntent.id);

    const payment = {
      name:name,
      designation:designation,
      image:image,
      email:email,
      salary:salary,
      month:month,
      year:year,
      transactionId:paymentIntent.id,
      date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      _id:_id,


      
    }

    const res = await axiosSecure.post('/payment',payment)
        console.log('payment save',res.data)
        if(res.data?.paymentResult?.insertedId){
          swal("Good job!", "Payment Successfully!", "success");
          // toast.success('Payment success ful')
        }
        


  }
}

   

        
   
    
    }
    useEffect(()=>{
      if(salary > 0){
        axiosSecure.post('/create-payment-intent',{salary:salary})
      .then(res=>setClientSecret(res.data.clientSecret))
      }
  },[salary,axiosSecure])

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className="btn btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {/* <p className="text-red-600">{error}</p> */}
     {transactionId && <p className="text-green-500">Your TransactionId {transactionId}</p>}
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOutForm;