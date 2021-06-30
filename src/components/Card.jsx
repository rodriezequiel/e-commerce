import React from "react";

export default function Card() {
  return (
      <div className="col-lg-4 col-sm-6 pb-4">
        <div
          className="card mx-4 shadow-lg mt-3 bg-body rounded"
          style={{ width: "auto", minWidth: "auto", maxWidth: "300px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80"
            className="card-img-top"
            alt="Movie poster"
            style={{ maxHeight: "35vh", minHeight: "35vh" }}
          />
          <div className="card-body pb-0">
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: "1rem",
                margin: "1%",
                padding: "1%",
              }}
            >
              HEEEEY
            </p>
          </div>
        </div>
      </div>
  );
}
