import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/homePage/homePage";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);
