import { Outlet } from "react-router-dom";
import Navber from "../components/Navbar";

const MainLayoutes = () => {
    return (
      <div>
        <Navber></Navber>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayoutes;