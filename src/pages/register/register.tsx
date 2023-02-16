import React, { useEffect, useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Formik, Form, Field } from "formik";

export default function Register() {
  document.title = "Register";

  const inputPassword = useRef<HTMLDivElement>(null);

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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="formContainer">
                <div className="formContainerDiv">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Write your firstname"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="error">{errors.firstName}</div>
                  ) : null}
                </div>

                <div className="formContainerDiv">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>

                <div className="formContainerDiv" ref={inputPassword}>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Write your password"
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                </div>

                <button type="submit">Register</button>
              </Form>
            )}
          </Formik>

          <Link to="/login">
            If you already have an account you can login here
          </Link>
        </div>
      </div>

      <div className="loginBg"></div>
    </div>
  );
}
