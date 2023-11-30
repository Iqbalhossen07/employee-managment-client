
import { Link } from "react-router-dom";



const About = () => {

 
    return (
      
        <section>
       

<div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row" data-aos = "zoom-in">
          <div className='lg:w-1/2 relative' data-aos = "fade-right">
            <img src="https://i.ibb.co/tXWYtdJ/pexels-olia-danilevich-4974920.jpg" className="w-full  rounded-lg shadow-2xl" />   
          
          </div>
          <div className='lg:w-1/2' data-aos = "fade-left">
            <h1 className="text-base md:text-3xl lg:text-4xl font-semibold text-[#1976D2]">About Us</h1>
            <p className="py-6 text-justify text-[#706F6F]">

            At Softimpact, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.

            The general purpose of Softimpact is to develop and promote advanced information technologies for multi-user operation.

Softimpact's business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.

Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.

{/* As a leader in technology exploring, Softimpact is committed to exporting quality software worldwide

            Our hotel provides the best service here, due to which we are popular among all. Those of us who come here once, come again later. We try our best to provide the best service to a client. <br /> <br />

            In a glass-and-brick building in a residential neighbourhood,
            Understated rooms provide smart TVs, air conditioners and minibars, as well as tea and coffeemaking facilities. <br /> <br />

            Dining options include a cafe and an international restaurant. Parking, Wi-Fi and airport transfers are available. */}
</p>
            {/* <Link to=''>
            <button className="btn btn-primary bg-[#26917C] hover:bg-[#26917C] border-none">Call </button>
            </Link> */}
          </div>
        </div>
      </div>
      
        </section>
    );
};

export default About;