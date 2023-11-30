import { useLoaderData } from "react-router-dom";

const EmployeesDetails = () => {
    const loaderData = useLoaderData()
    // console.log(loaderData)
    return (
        <section>
            <div className="overflow-x-auto" data-aos="zoom-in">
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Name</th>
              <th>Image</th>
              <th>Salary</th>
              <th>Designation</th>
             
            </tr>
          </thead>
          <tbody>
          
              <tr >
                <td className="">{loaderData?.name}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={loaderData?.image} alt="Hotel" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>${loaderData?.salary}</td>
                <td>{loaderData?.designation}</td>
               
              </tr>
           
          </tbody>
        </table>
      </div>
        </section>
    );
};

export default EmployeesDetails;