import "./App.css";
import { RouterProvider } from "react-router-dom";
import { allRoutes } from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <RouterProvider router={allRoutes} />;
}

export default App;
