import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/homePage/homePage";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../components/home/home";
import Markets from "../pages/markets/markets";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "markets",
        element: <Markets></Markets>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
