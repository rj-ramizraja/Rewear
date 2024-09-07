import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.svg" className="img-fluid" height="20" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-disabled="true">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form
              className="d-flex align-items-center text-nowrap"
              role="search"
            >
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="cart position-relative mx-4">
                <Link
                  data-bs-toggle="offcanvas"
                  to="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <i className="fa-solid fa-bag-shopping text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2<span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </div>
              <div className="d-flex gap-1 ms-4">
                <Link className="btn btn-dark" type="button" to="/login">
                  Sign In
                </Link>
                <Link
                  className="btn btn-outline-dark"
                  type="button"
                  to="/register"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            My Basket <small>( 4 Items)</small>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <td width="23%">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"
                      className="img-fluid"
                    />
                  </td>
                  <td width="27%">
                    <h5>Kibal Batal</h5>
                    <h6>
                      Size <span className="fw-normal">28 mm</span>
                    </h6>
                  </td>
                  <td className="fw-semibold text-center" width="24%">
                    <h6>Qty</h6>
                    <div className="input-group">
                      <button className="btn btn-outline-dark px-3" type="button">
                        -
                      </button>
                      <input type="text" aria-label="First name" className="form-control" />
                      <button className="btn btn-outline-dark px-3" type="button">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="fw-semibold text-center" width="10%">
                    <h6>Color</h6>
                    <span className="d-block mx-auto color-box rounded-5"></span>
                  </td>
                  <td width="15%">
                    <h4>$149.99</h4>
                  </td>
                  <td width="48px" className="text-center">
                    <Link to="/">
                      <i className="fa-solid fa-xmark"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
