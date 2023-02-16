import "./navbar.css";

import { Link } from "react-router-dom";

import { Transition } from "react-transition-group";
import LoginSVG from "../../assets/loginSVG";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 mini-container">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="col mini-container">
          <div className="nav">
            <Link to="">
              <span>Home</span>
            </Link>
            <Link to="">
              <span>Home</span>
            </Link>
            <Link to="">
              <span>Home</span>
            </Link>
            <Link to="">
              <span>Home</span>
            </Link>
          </div>
        </div>
        <div className="col-2 mini-container-icons">
          <Link to="login">
            <LoginSVG></LoginSVG>
            LOGIN
          </Link>

          <Link to="register">
            <LoginSVG></LoginSVG>
            RETGISTER
          </Link>

          <Link to="">
            <LoginSVG></LoginSVG>
          </Link>
        </div>
      </div>
    </div>
  );
}
