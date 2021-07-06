import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Table from '../components/Table'
import Navbar from './Navbar'
import { deleteProducFromCart } from '../state/cart'
import { clearCart } from '../utils/index'
import { getCart } from '../state/cart'

function Cart() {
  let { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  const deleteProduct = (user, item) => {
    dispatch(deleteProducFromCart({ userId: user, product: item })).then(() =>
      dispatch(getCart())
    )
  }

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <div>
      <Navbar transparent={false} />
      {cart.Products && !cart.Products.length && (
        <h1>You have no products...</h1>
      )}
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
          clearCart(cart.UserId).then(() => dispatch(getCart()))
        }}
      >
        Vaciar Carrito
      </button>
      <Link to='/checkout'>
        <button disabled={cart.Products && !cart.Products.length}>
          Confirmar Compra
        </button>
      </Link>
    </div>
  )
}

export default Cart
