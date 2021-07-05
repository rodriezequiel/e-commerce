import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../state/cart";
import { deleteProducFromCart } from "../state/cart";
import Navbar from "./Navbar";
import Table from "../components/Table";
import { Link, useHistory } from "react-router-dom";
import { clearCart } from "../utils/index";

function Cart() {
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteProduct = (user, item) => {
    dispatch(deleteProducFromCart({ userId: user, product: item }));
  };
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div>
      <Navbar transparent={false} />
      {!cart.Products.length && <h1>You have no products...</h1>}
      {cart && (
        <Table
          items={cart.Products}
          user={cart.UserId}
          deleteItem={deleteProduct}
        />
      )}
      <button
        disabled={!cart.Products.length}
        onClick={() => {
          clearCart(cart.UserId);
        }}
      >
        Vaciar Carrito
      </button>
      <Link to="/checkout">
        <button disabled={!cart.Products.length}>Confirmar Compra</button>
      </Link>
    </div>
  );
}

export default Cart;
