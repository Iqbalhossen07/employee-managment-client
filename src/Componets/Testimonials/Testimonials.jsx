import  {  useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

import slider1 from '../../assets/testimonial3.png'
import slider2 from '../../assets/testimonial2.jpg'
import slider3 from '../../assets/testimonial1.jpg'


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {



    return (
        <>
      
       <section className='mt-20'>

       <div>
          <h2 className="text-4xl text-center text-[#1976D2] font-semibold">Our Clients Says</h2>
          <div className="divider w-24 text-red-500 mx-auto"></div>


  
  
        </div>
       <Swiper 
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper "
        >

<SwiperSlide className='p-16'>
<div
    slot="container-start"
    className="parallax-bg "
    style={{
      'background-image': `url(https://i.ibb.co/C8LGnKT/pexels-pixabay-276452.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title  " data-swiper-parallax="-300" data-aos = "fade-down">
  Sajid Ahmed
  </div>
  <div className="subtitle " data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider1})`,
  }}
  >
 
   
  </div>
</div>
  
  </div>
  <div className="text " data-swiper-parallax="-100" data-aos = "fade-up">
  The developers here do a very good job, because I am working on a software from here, so.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>
<SwiperSlide className='p-16'>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(https://i.ibb.co/gR3HVCs/pexels-jorge-jesus-614117.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
  Amir Ahmed
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider2})`,
  }}
  >
 
   
  </div>
</div>
  
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  Their work skills are very good, I was designing UI from them, it was very good.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>
<SwiperSlide className='p-16'>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(https://i.ibb.co/fqL9dL7/pexels-pixabay-248515.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
  Masum Bhuiya 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider3})`,
  }}
  >
 
   
  </div>
</div>
  
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  The efficiency of work here is very good, from here I was working on a software blockchain
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>


        </Swiper>
       </section>
      </>
    );
};

export default Testimonials;