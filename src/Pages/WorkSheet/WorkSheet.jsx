
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import swal from 'sweetalert';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    const axiosPublic = useAxiosPublic()
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
  
    console.log(data);
    const worksheet = {
        task:data.task,
        hour:data.hour,
        date:data.date,
        email:user?.email
  
    }

    const menuRes = await axiosPublic.post('/work',worksheet)
    if(menuRes.data.insertedId){
        swal("Good job!", "Create Successfully!", "success");
        window.location.reload()
        console.log(menuRes.data)
    }
  };


  

  const { data: work = [] } = useQuery({
      queryKey: ['work', user?.email],
      queryFn: async () => {
          const res = await axiosSecure.get(`/work/${user.email}`)
          return res.data;
      }
  })
  console.log(work)

  return (
    <section>
      <div className=" ">
        <div className="flex-col ">
          <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center  md:flex-row gap-6">
                {/* Select A Task */}
                <div className="form-control w-full ">
                  <label className="label flex-shrink-0">
                    <span className="label-text">Select A Task</span>
                  </label>
                  <select
                    defaultValue="task"
                    {...register('task', { required: true })}
                    className="select select-bordered flex-grow"
                  >
                    <option disabled value="task">
                      Select a Task
                    </option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                  </select>
                </div>

                {/* User Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Hours</span>
                  </label>
                  <input
                    {...register('hour', { required: true })}
                    type="number"
                    placeholder="Enter the Hour"
                    name="hour"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Email */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    {...register('date', { required: true })}
                    type="date"
                    placeholder="Enter the date"
                    name="date"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control w-full">
                  <button type="submit" className="btn btn-accent">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="divider"></div> 

      <div className="overflow-x-auto" >
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Task</th>
              <th>Hour</th>
              <th>Date</th>  
            </tr>
          </thead>
          <tbody>
            {work && work.map((work) => (
              <tr key={work._id}>
                <td >{work.task}</td>
                <td >{work.hour}</td>          
                <td >{work.date}</td>          
                        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WorkSheet;
