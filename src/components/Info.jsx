import React from "react";

export default function Info() {
  return (
    <div className="d-flex container-fluid">
      <div className="row row d-flex justify-content-between">
        <div className="col-4 mx-4 my-5">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perspiciatis non
            possimus magnam facilis reiciendis illo quibusdam, earum, aspernatur recusandae officia
            dolore excepturi quo at! Doloremque eos repellat adipisci iure.
          </p>
        </div>
        <div className="col-7">
          <div className=' d-flex justify-content-center cards my-5 me-2'>
            <div className="card card-option bg-dark text-black mx-0">
              <img
                className="card-img zindex-tooltip"
                src="https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=950&q=80"
                alt="hoodies"
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-center ">
                <h3 className="card-title">Hoodies</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
