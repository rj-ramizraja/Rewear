import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-4 mx-auto">
            <div className="border border-1 border-dark p-4 bg-white">
              <h3>Sign up to Rewear</h3>
              <form>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Your Password"
                  />
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
