import { useLoaderData } from "react-router-dom";

const EmployeesDetails = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    return (
        <div>
            this is a employees Details 
        </div>
    );
};

export default EmployeesDetails;