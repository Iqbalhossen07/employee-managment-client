import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import swal from "sweetalert";
import useEmployees from "../../hooks/useEmployees";
const image_hosting_key = import.meta.env.VITE_IMGBB_HOTING_KEY;
const image_hosting_api= (`https://api.imgbb.com/1/upload?key=${image_hosting_key}`)
// import SocialIcons from "../SocialICons/SocialICons";


const Register = () => {
    const [users,refetch] = useEmployees()
    const filterData = users.find(employeeList=> employeeList.fire === 'fire')
    console.log(filterData?.fire)

    const [verified,setVerified] = useState('False')
    const [fire,setFire] = useState('NotFire')
    const { register, handleSubmit } = useForm()
    const {createUser} = useContext(AuthContext)
    // console.log(createUser) 

    const axiosPublic = useAxiosPublic()
  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type': 'multipart/form-data'
        }
        
    });
    if(res.data.success){
      
        const menuItem = {
            name:data.name,
            email:data.email,
            password:data.password,
            role:data.role,
            bankAccount:data.bankAccount,
            salary:data.salary,
            designation:data.designation,
            image:res.data.data.display_url,
            verified:verified,
            fire:fire
            
        }
        if(filterData?.fire === "fire"){
            return alert('it is all ready fired')
        }
        console.log(menuItem)
        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{6,}/.test(data.password)) {
            // return alert("Password must have at least one uppercase letter, one special character, and a minimum length of 6 characters.")
            swal("Good job!", "Password must have at least one uppercase letter, one special character, and a minimum length of 6 characters.", "error");
            // return toast.error("Password must have at least one uppercase letter, one special character, and a minimum length of 6 characters.")
            
        }
       
    
        createUser(data.email,data.password)
        .then(async(result)=>{
            console.log(result.user)
            // swal("Good job!", "create successfully!", "success");
       
        //   toast.success("Create Successfully")
          swal("Good job!", "Create Successfully!", "success");
          
          const menuRes = await axiosPublic.post('/users',menuItem)
          if(menuRes.data.insertedId){
            //   toast.success("Added Successfully")
            //   swal("Good job!", "Create Successfully!", "success");
              console.log(menuRes.data)
          }
        
            
        })
        .catch(error=>{
            console.error(error)
            // swal("Good job!", "something wrong!", "error");
        //   toast.error(error.message)
          swal("Good job!", error.message, "error");
          
           
           
        })
        
    }


   
     
        


    }
    return (
        <section>
        <div className="hero md:mt-10 lg:20 ">
         <div className="hero-content flex-col ">
           <div className="text-center">
             <h1 className="text-4xl font-bold text-[#26917C]">Register now!</h1>
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm ">
           
             <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName")} /> */}
              {/* start */}
             {/* first  */}
             <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> User Name</span>
          </label>
          <input {...register("name",{required:true})} type="text"  placeholder="Enter the recipe name" name="name" className="input input-bordered w-full" />
          </div>
      </div>
             <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> Email</span>
          </label>
          <input {...register("email",{required:true})} type="email"  placeholder="Enter the recipe name" name="email" className="input input-bordered w-full" />
          </div>
      </div>
             <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> Password</span>
          </label>
          <input {...register("password",{required:true})} type="password"  placeholder="Enter the recipe name" name="password" className="input input-bordered w-full" />
          </div>
      </div>


              <div className="flex flex-col md:flex-row gap-6  ">
                {/* first start*/}
          <div className="form-control w-full">
           <label className="label">
               <span className="label-text"> Select A Role</span>
           </label>
           <select defaultValue="default" {...register("role",{required:true})} className="select select-bordered w-full">
                <option disabled value="role">Select a Role</option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
                <option value="admin">admin</option>
                
                </select>
           </div>

   
           

           {/* first end*/}
       </div>
        {/* second */}

        <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> Bank Account</span>
          </label>
          <input {...register("bankAccount",{required:true})} type="text"  placeholder="Enter the recipe name" name="bankAccount" className="input input-bordered w-full" />
          </div>
      </div>
        <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> Salary</span>
          </label>
          <input {...register("salary",{required:true})} type="text"  placeholder="Enter the recipe name" name="salary" className="input input-bordered w-full" />
          </div>
      </div>
        <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full">
          <label className="label">
              <span className="label-text"> Designation</span>
          </label>
          <input {...register("designation",{required:true})} type="text"  placeholder="Enter the recipe name" name="designation" className="input input-bordered w-full" />
          </div>
      </div>
        {/* <div className="flex flex-col md:flex-row gap-6 ">
         
         <div className="form-control w-full disabled">
          <label className="label">
              <span className="label-text"> Verified</span>
          </label>
          <input {...register("verified",{required:true})} defaultValue={verified} type="text"  placeholder="Enter the recipe name" name="designation" className="input input-bordered w-full" />
          </div>
      </div> */}
     

      

       <div>
       <input {...register("image",{required:true})} type="file" className="mt-2 file-input file-input-bordered w-full max-w-xs" />
       </div>

       <div>
        <button className="btn btn-accent">Submit</button>
       </div>
            </form>
             <ToastContainer />
      
 
         <NavLink to="/login">
         <p className=" block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
             Already have an account?
             <button
                 className="font-medium text-[#26917C] transition-colors hover:text-[#26917C]"
                 href=""
             >
                 Login
             </button>
             </p>
 
         </NavLink>
                 </div>
                 </div>
             </div>
 
             {/* <div className="flex justify-center mb-20 mt-5">
             <SocialIcons></SocialIcons>
           </div> */}
      </section>
    );
};

export default Register;