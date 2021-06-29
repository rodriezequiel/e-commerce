import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-trasparent">
        <div className="container-fluid">
          <img
            className="ms-4 mt-3"
            src="https://i0.wp.com/www.ecoledesurfmoliets.com/wp-content/uploads/2018/01/logo-surf.png?fit=288%2C288&ssl=1"
            alt="logo"
            width="60"
            height="60"
          />
          <h2 className="navbar-brand ms-3 my-0 fs-1">
            BOARD<span style={{ color: "red", fontSize:'3.2rem'}}>4</span>LIFE
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <ul className="navbar-nav mt-2">
              <li className="nav-item nav-option mx-4 fs-3">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav-option mx-4 my-auto fs-3">
                <a className="nav-link active" href="#">
                  Abaut Us
                </a>
              </li>
              <li className="nav-item nav-option mx-4 my-auto fs-3">
                <a  style={{color: 'red'}} className="nav-link active" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item nav-option mx-4 my-auto fs-3">
                <a className="nav-link active" href="#">
                  Log In
                </a>
              </li>
              <li className="nav-item nav-option ms-5 my-auto fs-3">
                <a className="nav-link active" href="#">
                  <i className="bi bi-cart3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
