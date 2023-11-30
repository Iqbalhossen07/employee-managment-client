import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <section>
            <div className="flex items-center justify-center">
                <div >
            {
              error.status = 404  && <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6 text-center ">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                 {/* {error.status = 'Not found page' } */}
                 <img src="https://i.ibb.co/W3kGJw7/image.png" alt="" />
                </h5>
               
              </div>
              <Link to="/">
              <div className="p-6 pt-0 flex justify-center">
                <button
                  className="select-none rounded-lg bg-[#FF444A] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#ec8689] transition-all hover:shadow-lg hover:bg-[#FF444A] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                 Back to home
                </button>
              </div>
              </Link>
            </div>
            }
          </div>
                
            </div>
        </section>
    );
};

export default ErrorPage;