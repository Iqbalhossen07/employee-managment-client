import { Outlet } from "react-router-dom";
import NavBar from "../Componets/NavBar/NavBar";

const MainLaOut = () => {
    return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaOut;