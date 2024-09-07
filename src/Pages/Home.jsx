import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="mb-4">
                  <span className="fw-semibold">See</span> everything with{" "}
                  <span className="fw-semibold">Clarity</span>
                </h2>
                <p className="mb-4">
                  Buying eyewear should leave you happy and good-looking, with
                  money in your pocket. Glasses, sunglasses, and contacts—we’ve
                  got your eyes covered.
                </p>
                <Link to="/" className="btn btn-dark mt-2">
                  Shop Now
                  <span>
                    <i className="ms-2 fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
              <div className="col-lg-6">
                <img src="/images/banner-img.png" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
