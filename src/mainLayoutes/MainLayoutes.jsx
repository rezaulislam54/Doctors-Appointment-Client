import { Outlet } from "react-router-dom";
import Navber from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayoutes = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoutes;