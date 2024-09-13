import React from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import axios from "axios";
import { useFormik } from "formik";
import Password from "antd/es/input/Password";

const Register = () => {
  const navigate = useNavigate();
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validateScheme = Yup.object().shape({
    name:Yup.string().min(4). required("Name is required"),
    email:Yup.string().email("Please enter valid email"). required("Email is required"),
    password:Yup.string().required("This field is required")
    .min(8, "Pasword must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password ahould contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  })
  const {errors, values, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name : "",
      email : "",
      password : "",
    },
    validationSchema : validateScheme,
    onSubmit: async(values) => {
      // console.log(values);
      const {name, email, password} = values;
      const responce = await axios.post("http://localhost:3000/api/register", {name, email, password}) 
      // const responce = await axios.post(
      //   "http://localhost:3000/api/register",
      //   { name, password, email }
      // );
      if (responce.status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 900);
      }
      console.log(responce);
    }
  })
  return (
    <div className="form">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-4 mx-auto">
            <div className="border border-1 border-dark p-4 bg-white">
              <h3>Sign up to Rewear</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name ? (<span className="text-danger">{errors.name}</span>) : null}
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    className="form-control"
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && touched.email ? (<span className="text-danger">{errors.email}</span>) : null}
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                  {errors.password && touched.password ? (<span className="text-danger">{errors.password}</span>) : null}
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-dark">
                    Sign Up
                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
            <div
              style={{
                backgroundColor: "#f2f2f2",
                border: "1px solid #c5c5c5",
              }}
              className="p-4"
            >
              <p className="text-center mb-0">
                Already have an account?
                <span className="fw-semibold">
                  <Link to="/login">Sign In</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
