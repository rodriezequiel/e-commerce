import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";
import Card from "../components/Card";

import { useSelector } from "react-redux";
import { getProducts } from "../utils/index";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const query = new RegExp(
    useSelector(state => state.query),
    "i"
  );
  useEffect(() => {
    getProducts().then(products => setProducts(products));
  }, []);
  return (
    <>
      <Navbar transparent={false} />
      <ShopHeader />
      <div className="container-fluid bg-dark pt-3">
        <div className=" d-flex row justify-content-center">
          <div className="col-3 pt-3 fs-3">
            <div className="list-group list-group-flush amatic">
              <a className="list-group-item bg-dark text-white text-center">Indumentaria</a>
              <a className="list-group-item bg-dark text-white text-center">Tablas urbanas</a>
              <a className="list-group-item bg-dark text-white text-center">Tablas acuáticas</a>
            </div>
          </div>
          <div className="col-9 bg-light">
            <div className="row d-flex justify-content-start pt-3 mx-5">
              <Switch>
                <Route
                  exact
                  path="/shop"
                  render={() =>
                    Object.keys(products)
                      .filter(names => names.match(query))
                      .map((product, index) => (
                        <Card item={product} key={index} products={products} />
                      ))
                  }
                />
                {/* <Route exact path='/shop/:category' render={({match}) => }/> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
