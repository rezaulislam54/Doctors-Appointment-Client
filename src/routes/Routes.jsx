import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../mainLayoutes/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";
import Doctors from "../pages/doctors/Doctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/doctors/:speciality",
        element: <Doctors></Doctors>,
      },
    ],
  },
]);

export default router;
