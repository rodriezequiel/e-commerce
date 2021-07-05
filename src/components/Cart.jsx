import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Table from "../components/Table";
import Navbar from "./Navbar";
import { deleteProducFromCart } from "../state/cart";
import { clearCart } from "../utils/index";

function Cart() {
  let {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteProduct = (user, item) => {
    dispatch(deleteProducFromCart({ userId: user, product: item }));
  };

  return (
    <div>
      <Navbar transparent={false} />
      {(cart.Products && !cart.Products.length) && <h1>You have no products...</h1>}
      {cart.Products && (
        <Table
          items={cart.Products}
          user={cart.UserId}
          deleteItem={deleteProduct}
        />
      )}
      <button
        disabled={cart.Products && !cart.Products.length}
        onClick={() => {
          clearCart(cart.UserId);
        }}
      >
        Vaciar Carrito
      </button>
      <Link to="/checkout">
        <button disabled={cart.Products && !cart.Products.length}>Confirmar Compra</button>
      </Link>
    </div>
  );
}

export default Cart;
