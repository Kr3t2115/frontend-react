import React, { useEffect, useRef } from "react";
import LoginApi from "../../services/loginApiRequest";
import "./login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Formik, Form, Field } from "formik";

export default function Login() {
  const inputPassword = useRef<HTMLDivElement>(null);

  document.title = "Login";

  const validateEmail = (value: any) => {
    let error;
    if (!value) {
      error = "Email is required! Fill the following field";
      inputPassword.current?.classList.remove("unHidden");
      return error;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
      inputPassword.current?.classList.remove("unHidden");
      return error;
    } else if (value == "") {
      inputPassword.current?.classList.remove("unHidden");
    } else {
      inputPassword.current?.classList.add("unHidden");
    }
  };

  return (
    <div className="loginMainContainer">
      <div className="BeforeContainer">
        <div className="loginContainer">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              LoginApi(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="formContainer">
                <div className="formContainerDiv">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    validate={validateEmail}
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>

                <div className="formContainerDiv hidden" ref={inputPassword}>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Write your password"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                </div>

                <button type="submit">Login</button>
              </Form>
            )}
          </Formik>

          <Link to="/register">
            If you not have account you can register here
          </Link>
        </div>
      </div>

      <div className="loginBg"></div>
    </div>
  );
}
