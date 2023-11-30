import Testimonials from "../../Componets/Testimonials/Testimonials";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Team from "../Team/Team";


const Home = () => {
    return (
       <section className="mb-20">
         <div>
          <Banner></Banner>
        </div>
        <div>
          <About></About>
        </div>
        <div>
        <Service></Service>
        </div>
        <div>
          <Team></Team>
        </div>
        <div>
          <Testimonials></Testimonials>
        </div>
       </section>
    );
};

export default Home;