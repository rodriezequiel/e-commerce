import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts } from "../utils/index";

export default function Card() {
  const [products, setProducts] = useState([]);
  const [names, setNames] = useState([]);
  const query = new RegExp(
    useSelector(state => state.query),
    "i"
  );

  useEffect(() => {
    getProducts().then(products => {
      console.log(products);
      const keys = Object.keys(products);
      console.log(keys);
      setNames(keys);
      setProducts(products);
    });
  }, []);


  return (
    <>
      {names
        .filter(name => name.match(query))
        .map((product, index) => {
          return (
            <div className="col-lg-4 col-sm-6 pb-4 amatic" key={index}>
              <Link to={`/shop/${product}`} style={{ textDecoration: "none", color: "black" }}>
                <div
                  className="card mx-4 shadow-lg mt-3 bg-body rounded"
                  style={{ width: "auto", minWidth: "auto", maxWidth: "300px" }}
                >
                  <img
                    src={products[product] && products[product][0].picture[0]}
                    className="card-img-top"
                    alt="Movie poster"
                    style={{ maxHeight: "35vh", minHeight: "35vh" }}
                  />
                  <div className="card-body pb-0 pt-2 text-center mb-0 fs-4">
                    <p
                      style={{
                        lineHeight: "1.5rem",
                        marginBottom:'1%'
                      }}
                    >{product}</p>
                    <p className="mb-0 pt-0">${products[product] && products[product][0].price}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}
