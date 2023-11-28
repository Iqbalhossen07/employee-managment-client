import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";

const CheckOutForm = () => {

    // const [data,setData] = useState(employee)
    // console.log(data?.salary)


  
  
  
    // const totalPrice = filterData.reduce((total,item)=> total+ item.price,0)
    // console.log(totalPrice)
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

        
   
    
    }

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
      <button type="submit" disabled="">
        Pay
      </button>
      {/* <p className="text-red-600">{error}</p>
     {transactionId && <p>Your TransactionId {transactionId}</p>} */}
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOutForm;