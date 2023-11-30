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
       <section className="grid grid-cols-1 md:grid-cols-3 ">
        {
          serviceData?.map(data=> <ServiceCard key={data.id} data={data}></ServiceCard>)
        }
       </section>
    );
};

export default Service;