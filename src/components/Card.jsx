import React from "react";
import { Link } from "react-router-dom";

export default function Card({item, products}) {
  return (
    <div className="col-lg-4 col-sm-6 pb-4 amatic">
      <Link to={`/shop/product/${item}`} style={{ textDecoration: "none", color: "black" }}>
        <div
          className="card mx-4 shadow-lg mt-3 bg-body rounded"
          style={{ width: "auto", minWidth: "auto", maxWidth: "300px" }}
        >
          <img
            src={products[item] && products[item][0].picture[0]}
            className="card-img-top"
            alt="Movie poster"
            style={{ maxHeight: "35vh", minHeight: "35vh" }}
          />
          <div className="card-body pb-0 pt-2 text-center mb-0 fs-4">
            <p
              style={{
                lineHeight: "1.5rem",
                marginBottom: "1%",
              }}
            >
              {item}
            </p>
            <p className="mb-0 pt-0">${products[item] && products[item][0].price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
