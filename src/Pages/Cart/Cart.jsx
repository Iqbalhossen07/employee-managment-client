import useCart from "../../hooks/useCart";

const Cart = () => {
    const [payments,refetch] = useCart()
    const totalSalary = payments.reduce((total,item)=> total+ parseFloat(item.salary),0)
    console.log(totalSalary)
  
    return (
        <div>
            <h2 className="text-center text-3xl"> {payments.length}</h2>
            <h2 className="text-center text-3xl"> {totalSalary}</h2>
            
        </div>
    );
};

export default Cart;