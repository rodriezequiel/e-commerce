import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Table from "./Table";
import Navbar from "./Navbar";
import { deleteProducFromCart } from "../state/cart";
import { clearCart } from "../utils/index";
import { getCart } from "../state/cart";
import ShopState from "./ShopState";
import { statusShopClass } from "./../utils/globals";
import { changeShopState } from "../utils/changeIcons";

function Cart() {
  let { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteProduct = (user, item) => {
    dispatch(deleteProducFromCart({ userId: user, product: item })).then(() =>
      dispatch(getCart())
    );
  };

  useEffect(() => {
    dispatch(getCart());
    changeShopState({
      ...statusShopClass,
      id: "status01",
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar transparent={false} />
      {cart.Products && !cart.Products.length && (
        <h1>You have no products...</h1>
      )}
      {cart.Products.length && (
        <div className="m-5 p-3 text-center">
          <ShopState />
          <Table
            items={cart.Products}
            user={cart.UserId}
            deleteItem={deleteProduct}
          />
          <div className="d-flex justify-content-evenly my-5">
            <button
              className="btn btn-dark fs-4"
              onClick={() => {
                clearCart(cart.UserId).then(() => dispatch(getCart()));
              }}
            >
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-warning fs-4">Continuar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
