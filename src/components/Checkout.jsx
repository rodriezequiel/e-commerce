import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { confirmOrder } from '../utils/index'
import Navbar from './Navbar'

function Checkout() {
  const cart = useSelector((state) => state.cart)
  const [medioDePago, setMedioDePago] = useState('')
  const [total, setTotal] = useState(0)
  const [order, setOrder] = useState({})

  const handlePayment = (e) => {
    const { value } = e.target
    setMedioDePago(value)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setOrder({ ...order, [name]: value })
  }

  useEffect(() => {
    const totalCart = cart.Products.reduce((acum, item) => {
      acum += item.price * item.CartItem.quantity
      return acum
    }, 0)

    setTotal(totalCart)
  }, [cart])
  return (
    <>
      <Navbar transparent={false} />
      <div>
        <h1>Mis productos: </h1>
        {cart &&
          cart.Products.map((product) => {
            const { name, brand, color, picture, price, size, CartItem, id } =
              product
            return (
              <div>
                <h1>Nombre : {name}</h1>
                <h1> Cantidad: {CartItem.quantity}</h1>
                <h2> Marca: {brand}</h2>
                <h2> Color: {color}</h2>
                <h2>Precio: ${price}</h2>
                <h2>+ info: {size}</h2>
                <img
                  style={{ width: '100px' }}
                  src={picture[0]}
                  alt={name}
                ></img>
              </div>
            )
          })}{' '}
      </div>
      <h1>Total Productos: {total}</h1>
      <h1>Total Envio: 500</h1>
      <h1>Total Compra: {total + 500}</h1>
      <h1>Por favor ingresa la informacion del envio: </h1>
      <div className='to be completed'>
        <label className='to be completed'>Telefono de contacto</label>
        <input
          type='text'
          className='form-control'
          placeholder='Telefono...'
          name='telephone'
          // value={}
          onChange={handleChange}
        />
        <label className='to be completed'>Direccion de envio: </label>
        <input
          type='text'
          className='form-control'
          placeholder='Direccion de envio...'
          name='address'
          // value={}
          onChange={handleChange}
        />
        <label className='to be completed'>
          Agrega informacion adicional:{' '}
        </label>
        <input
          type='text'
          className='form-control'
          placeholder='+ info...'
          name='additionalInfo'
          // value={}
          onChange={handleChange}
        />
        <h5>
          Costo de envio: <span>$500</span>
        </h5>
        <label>Elegi un metodo de pago</label>

        <select
          onChange={(e) => {
            handlePayment(e)
          }}
          name='paymentMethod'
        >
          <option value='mercadopago'>MercadoPago</option>
          <option value='tarjeta'>Tarjeta</option>
          <option value='contado'>Efectivo/Transferencia</option>
        </select>
        {medioDePago === 'contado' && (
          <div>
            <h1>
              Estos son nuestros datos bancarios para el pago de contado:{' '}
            </h1>
            <p>CBU: 129312498438294392</p>
            <p>CUIT: 2099999999</p>
            <p>alias: p5test</p>
          </div>
        )}
        {medioDePago === 'tarjeta' && (
          <button>Pagar con tarjeta de credito/debito</button>
        )}
        {medioDePago === 'mercadopago' && (
          <button> Pagar con MercadoPago</button>
        )}
      </div>
      <button onClick={() => confirmOrder({ ...order, userId: 1 })}>
        Confirmar compra
      </button>
    </>
  )
}

export default Checkout
