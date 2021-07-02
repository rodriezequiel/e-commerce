import axios from 'axios'

export const getProducts = () => {
  return axios
    .get('http://localhost:3001/api/products/all')
    .then((res) => res.data)
    .then((products) => products)
}

export const getOneProduct = (name) => {
  return axios
    .get(`http://localhost:3001/api/products/single/${name}`)
    .then((res) => res.data)
    .then((singleProduct) => singleProduct)
}

export const addProductToCartBD = (products) => {
  return axios
    .post(`http://localhost:3001/api/cart/add`, products)
    .then((res) => res.data)
    .then((response) => {
      alert('producto agrefado')
      return response
    })
}

export const clearCart = (userId) => {
  console.log(userId)
  return axios
    .delete(`http://localhost:3001/api/cart/vaciarcarrito`, { userId: userId })
    .then((res) => res.data)
    .then((response) => response)
}
