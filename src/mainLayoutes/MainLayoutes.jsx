import { Outlet } from "react-router-dom";
import Navber from "../components/Navbar";

const MainLayoutes = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoutes;