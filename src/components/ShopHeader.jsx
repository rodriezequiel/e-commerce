import React from "react";

export default function ShopHeader() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row d-flex justify-content-evenly pt-5">
        <div className=" ms-5 col-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb textoBlanco">
              <li className="breadcrumb-item nonActive fs-3">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active fs-3" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex col-5 justify-content-end me-5">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
