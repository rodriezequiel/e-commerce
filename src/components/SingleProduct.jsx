import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { getOneProduct } from '../utils/index'
import { addToCart } from '../state/cart'
import { addProductToCartBD } from '../utils/index'
import Navbar from '../components/Navbar'

function SingleProduct() {
  const param = useParams()
  const history = useHistory()
  //cart from redux
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  //states
  const [singleProduct, setSingleProduct] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [brand, setBrand] = useState('')
  const [picture, setPicture] = useState([])
  const [price, setPrice] = useState('')
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [stock, setStock] = useState([])
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [productToAdd, setProductToAdd] = useState('')
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    getOneProduct(param.name)
      .then((products) => {
        setSingleProduct(products)
        return products
      })
      .then((info) => {
        const { name, description, brand, picture, price } = info[0]
        setName(name)
        setDescription(description)
        setBrand(brand)
        setPicture(picture)
        setPrice(price)
      })
  }, [])
  useEffect(() => {
    singleProduct.map((product, index) => {
      if (index === 0) {
        setSelectedColor(product.color)
        setSelectedSize(product.size)
      }
      setSize((size) => [...size, product.size])
      setSize((size) => [...new Set(size)])
      setColor((color) => [...color, product.color])
      setColor((color) => [...new Set(color)])
      setStock((stock) => [...stock, product.stock])
      setStock((stock) => [...new Set(stock)])
    })
  }, [singleProduct])

  const addProduct = () => {
    let productToAdd = searchProductId()
    productToAdd = { ...productToAdd, quantity: counter, UserId: cart.UserId }
    addProductToCartBD(productToAdd)
  }

  const searchProductId = () => {
    const prod = singleProduct.filter((product) => {
      return product.color === selectedColor && product.size === selectedSize
    })
    return prod[0]
  }

  //limpiar esta funcion
  const handleChange = (e) => {
    const { value, name } = e.target
    if (name === 'color') {
      setSelectedColor(value)
      const AvailableSizes = singleProduct.reduce((acum, item) => {
        if (item.color === value) acum.push(item.size)
        return acum
      }, [])

      setSize(AvailableSizes)
    }
    if (name === 'size') {
      setSelectedSize(value)
      const AvailableColors = singleProduct.reduce((acum, item) => {
        if (item.size === value) acum.push(item.color)
        return acum
      }, [])

      setColor(AvailableColors)
    }
  }

  return (
    <div>
      <Navbar transparent={false} />
      <h1>Add to cart: </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => addProduct()}>Add to cart</button>

      <h1>{name}</h1>
      <p>{description}</p>
      <h2>${price}</h2>
      <h3>{brand}</h3>
      {picture.map((pic, index) => (
        <img key={index} style={{ width: '300px' }} src={pic} alt={name} />
      ))}
      <label for='size'>Elige un talle</label>
      <select name='size' onChange={(e) => handleChange(e)} id='size'>
        {size.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <label for='color'>Elige un color</label>
      <select name='color' onChange={handleChange} id='color'>
        {color.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  )
}

export default SingleProduct
