import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import { clearCart } from '../utils/index'

function Cart() {
  const cart = useSelector((state) => state.cart)

  useEffect(() => {}, [cart])
  return (
    <div>
      <Navbar transparent={false} />
      {cart &&
        cart.Products.map((product) => {
          const { name, brand, color, picture, price, size, quantity } = product
          return (
            <div>
              <h1>{name}</h1>
              <h1>{quantity}</h1>
              <h2>{brand}</h2>
              <h2>{color}</h2>
              <h2>{price}</h2>
              <h2>{size}</h2>
              <img style={{ width: '100px' }} src={picture[0]} alt={name}></img>
              <button> Quitar producto </button>
              <button> Editar producto </button>
            </div>
          )
        })}
      <button onClick={() => clearCart(cart.UserId)}>Vaciar Carrito</button>
      <button>Confirmar Compra</button>
    </div>
  )
}

export default Cart
