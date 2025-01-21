import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../mainLayoutes/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";
import Doctors from "../pages/doctors/Doctors";
import CardDetails from "../pages/cardDetails/CardDetails";
import AboutPage from "../pages/aboutPage/AboutPage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

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
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/doctors/:speciality",
        element: <Doctors></Doctors>,
      },
      {
        path: "/doctor/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctors/${params.id}`),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
