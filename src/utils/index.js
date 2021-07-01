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
