import React, { useRef } from "react";
import LoginApi from "../../services/loginApiRequest";
import "./login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import LoginBg from "../../assets/loginBg.jpg";

interface Login {
  email?: String;
  password?: String;
}

type FormEl = React.FormEvent<HTMLFormElement>;

export default function Login() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const changePasswordView = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "") {
      inputPassword.current?.classList.add("addDisplay");

      inputPassword.current?.classList.add("unHidden");
    } else {
      inputPassword.current?.classList.remove("unHidden");

      inputPassword.current?.classList.remove("addDisplay");
    }
  };

  const sendData = () => {
    const loginData: Login = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
    };
    LoginApi(loginData);
  };

  return (
    <div className="loginMainContainer">
      <div className="container">
        <div className="loginContainer">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>

          <input
            type="email"
            ref={inputEmail}
            onChange={(e) => {
              changePasswordView(e);
            }}
            placeholder="Write your email"
          />
          <input
            type="password"
            ref={inputPassword}
            placeholder="Write your password"
            className="hidden"
          />
          <button
            type="submit"
            onClick={() => {
              sendData();
            }}
          >
            Login
          </button>
          <Link to="/"> If you not have account you can register here</Link>
        </div>
      </div>

      <div className="loginBg">
        <img src={LoginBg} alt="background image"></img>
      </div>
    </div>
  );
}
