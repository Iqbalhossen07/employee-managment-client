import banner from '../../assets/banner4.jpg';

const Banner = () => {
    return (
        <div className="hero h-72 md:h-96 lg:h-[570px] relative">
            <img className='h-full md:h-96 lg:h-[570px] w-full object-cover' src={banner} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-neutral-content">
                <div>
                    {/* <div className='flex items-center gap-2'>
                        <img className='w-12 ' alt="" />
                        
                    </div> */}
                    <p className='italic md:[400px] mb-5 text-2xl' >Empowering Success Through Innovation</p>
                    <h1 className="mb-5  text-2xl md:text-3xl lg:text-6xl font-medium" data-aos="fade-left">Transforming Ideas  into <br />Impactful Solutions</h1>
                    <p className='hidden md:block  italic mb-5' >At Employee Management, we pioneer cutting-edge software solutions that redefine industries <br /> and drive success. With a proven track record of excellence, we have been at the forefront of <br />innovation, delivering tailored software that empowers businesses to thrive in the digital era. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
