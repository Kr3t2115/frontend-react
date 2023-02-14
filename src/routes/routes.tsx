import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/homePage/homePage";
import Login from "../pages/login/login";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
]);
