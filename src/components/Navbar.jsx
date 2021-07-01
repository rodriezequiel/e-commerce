import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import navbarChange from "../utils/navbarChange";

export default function Nav({transparent = true}) {
  const location = useLocation();
    useEffect(() =>{
      if(location.pathname === '/home') navbarChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark ${(transparent) ? `bg-trasparent fixed-top` : `bg-dark shadow`}`}>
        <div className="container-fluid">
          <img
            className="ms-4 mt-3"
            src="https://i0.wp.com/www.ecoledesurfmoliets.com/wp-content/uploads/2018/01/logo-surf.png?fit=288%2C288&ssl=1"
            alt="logo"
            width="60"
            height="60"
          />
          <h2 className="navbar-brand ms-3 my-0 fs-1">
            board<span style={{ color: "red", fontSize:'3.2rem'}}>4</span>life
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
                <Link className="nav-link active" to='/home'>
                  Home
                </Link>
              </li>
              <li className="nav-item nav-option mx-4 my-auto fs-3">
                <a className="nav-link active" href="/home#aboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item nav-option mx-4 my-auto fs-3">
                <Link  style={{color: 'red'}} className="nav-link active" to="/shop">
                  Shop
                </Link>
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
