import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./homePage.css";

export default function HomePage() {
  return (
    <div className="main">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
}
