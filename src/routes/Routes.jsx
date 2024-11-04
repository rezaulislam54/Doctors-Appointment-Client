import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../mainLayoutes/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
