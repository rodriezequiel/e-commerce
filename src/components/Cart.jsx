import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../state/cart'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { clearCart, removeProduct } from '../utils/index'

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  useEffect(() => {
    console.log('should re render')
  }, [cart])

  return (
    <div>
      <Navbar transparent={false} />

      {!cart.Products.length && <h1>You have no products...</h1>}
      {cart &&
        cart.Products.map((product) => {
          const { name, brand, color, picture, price, size, CartItem, id } =
            product
          return (
            <div>
              <h1>{name}</h1>
              <h1>{CartItem.quantity}</h1>
              <h2>{brand}</h2>
              <h2>{color}</h2>
              <h2>{price}</h2>
              <h2>{size}</h2>
              <img style={{ width: '100px' }} src={picture[0]} alt={name}></img>
              <button onClick={() => removeProduct(cart.UserId, id)}>
                {' '}
                Quitar producto{' '}
              </button>
              <button> Editar producto </button>
            </div>
          )
        })}
      <button
        disabled={!cart.Products.length}
        onClick={() => {
          clearCart(cart.UserId)
        }}
      >
        Vaciar Carrito
      </button>
      <Link to='/checkout'>
        <button disabled={!cart.Products.length}>Confirmar Compra</button>
      </Link>
    </div>
  )
}

export default Cart
