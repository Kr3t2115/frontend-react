import React, { useRef } from "react";
import LoginApi from "../../services/loginApiRequest";
import "./login.css";
import { Link } from "react-router-dom";

interface Login {
  email?: String;
  password?: String;
}

type FormEl = React.FormEvent<HTMLFormElement>;

export default function Login() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const sendData = () => {
    const loginData: Login = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
    };
    LoginApi(loginData);
  };

  return (
    <div className="loginMainContainer">
      <div className="loginContainer">
        <label>Email</label>
        <input type="email" ref={inputEmail} placeholder="Write your email" />
        <label>Password</label>
        <input
          type="password"
          ref={inputPassword}
          placeholder="Write your password"
        />
        <button
          type="submit"
          onClick={() => {
            sendData();
          }}
        >
          Login
        </button>

        <span>
          If you not have account you can register <Link to="/">here</Link>
        </span>
      </div>
    </div>
  );
}
