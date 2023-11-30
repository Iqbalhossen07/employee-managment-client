import swal from "sweetalert";
import ContactAddress from "./ContactAddress";

const Contact = () => {

    const AddForm = e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const address = form.address.value;
        const message = form.message.value;
        const bookings = {email,address,message}

        console.log(email,address,message)
        
        fetch('http://localhost:5000/contact',{
            method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
               body: JSON.stringify(bookings),
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.insertedId){
                    swal("Good job!", "Added Successfully!", "success");
                    console.log(data)
                }
             })

        
  
};


    return (
        <section>
            <div>
                <ContactAddress></ContactAddress>
            </div>

             {/* first  */}
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold text-[#54e2d2] mb-3">Please FillUp </h2>
     <form onSubmit={AddForm}>
     <div className="flex flex-col md:flex-row gap-6  ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Email</span>
           </label>
           <label className="input-group">
             
               <input type="email"  placeholder="Enter the email name" name="email" className="input input-bordered w-full" />
           </label>
           </div>


          

            <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Address</span>
           </label>
           <label className="input-group">
             
               <input type="text"  required placeholder="Enter the  Address" name="address" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
        {/* second */}
       <div className="flex flex-col md:flex-row gap-6 ">
          

          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Message </span>
           </label>
           <textarea required placeholder="Message..." name="message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
           </div>
       </div>
      
    
       
       <div className="flex mt-10">
           <input type="submit" value="Submit" className="max-w-xs mx-auto text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]" />
         
          

           

         
       </div>
     </form>
        </section>
    );
};

export default Contact;