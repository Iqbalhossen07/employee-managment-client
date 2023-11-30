import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [serviceData,setServiceData] = useState();

  useEffect(()=>{
    fetch('/fake.json')
    .then(res=>res.json())
    .then(data=>setServiceData(data))
  },[])
  // console.log(serviceData)

  
    return (
       <section className=" ">
        <div>
          <h2 className="text-4xl text-center text-[#1976D2] font-semibold">Our Services</h2>
          <div className="divider w-24 text-red-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          serviceData?.map(data=> <ServiceCard key={data.id} data={data}></ServiceCard>)
        }
        </div>
       </section>
    );
};

export default Service;