import { Outlet } from "react-router-dom";
import NavBar from "../Componets/NavBar/NavBar";

const MainLaOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaOut;