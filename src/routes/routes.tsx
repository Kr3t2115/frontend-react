import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/homePage/homePage";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
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
