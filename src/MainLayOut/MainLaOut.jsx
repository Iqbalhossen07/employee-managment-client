import { Outlet } from "react-router-dom";
import NavBar from "../Componets/NavBar/NavBar";
import Footer from "../Componets/Shared/Footer/Footer";

const MainLaOut = () => {
    return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLaOut;