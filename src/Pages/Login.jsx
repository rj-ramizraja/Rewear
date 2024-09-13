import React from 'react'
import { Await, Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik'
import Password from "antd/es/input/Password";

const Login = () => {
  const navigate = useNavigate();
  const validateScheme = Yup.object().shape({
    email:Yup.string().email("Please enter valid email"). required("Email is required"),
    password:Yup.string().required("This field is required")
    .min(8, "Pasword must be 8 or more characters")
  })
  const {errors, values, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email : "",
      password : "",
    },
    validationSchema : validateScheme,
    onSubmit: async(values) => {
      // console.log(values);
      const {email, password} = values;
      const responce = await axios.post("http://localhost:3000/api/login", {email, password}) 
      // const responce = await axios.post(
      //   "http://localhost:3000/api/register",
      //   { name, password, email }
      // );
      if (responce.status === 200) {
        setTimeout(() => {
          navigate("/products");
        }, 900);
      }
      console.log(responce);
      localStorage.setItem('accessToken', responce.data.token)
    }
  })
  return (
    <div className="form">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-4 mx-auto">
            <div className="border border-1 border-dark p-4 bg-white">
              <h3>Sign in to Rewear</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="userEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && touched.email ? (<span className='text-danger'>{errors.email}</span>) : null}
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Password"
                  />
                  {errors.password && touched.password ? (<span className='text-danger'>{errors.password}</span>) : null}
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="disabledFieldsetCheck"
                    />
                    <label
                      className="form-check-label"
                      for="disabledFieldsetCheck"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-dark">
                    Sign In
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
                    <Link to="/register">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
