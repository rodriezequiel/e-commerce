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
      alert('producto agregado al carrito')
      return response
    })
}

export const clearCart = (userId) => {
  return axios
    .delete(`http://localhost:3001/api/cart/vaciarcarrito`, {
      data: { userId: userId },
    })
    .then((res) => res.data)
    .then((response) => {
      return response
    })
}
export const removeProduct = (userId, id) => {
  return axios
    .delete(`http://localhost:3001/api/cart/remove`, {
      data: { userId: userId, productid: id },
    })
    .then((res) => res.data)
    .then((response) => {
      return response
    })
}
export const confirmOrder = (orderInfo) => {
  console.log(orderInfo)
  return axios
    .post(`http://localhost:3001/api/order/checkout`, orderInfo)
    .then((res) => res.data)
    .then((response) => {
      alert('Orden de compra creada ok')
      return response
    })
}

export const getAllProducts = () => {
  return axios
    .get(`http://localhost:3001/api/admin/allproducts`)
    .then((res) => res.data)
    .then((response) => response)
}

export const updateProduct = (products) => {
  const updatedProducts = products.map((product) =>
    axios.put(`http://localhost:3001/api/admin/update`, product)
  )
  return Promise.all(updatedProducts)
    .then((res) => res.data)
    .then((updatedProducts) => updatedProducts)
}

export const addProduct = (product) => {
  return axios
    .post(`http://localhost:3001/api/admin/add`, product)
    .then((res) => res.data)
    .then((response) => response)
}
export const removeProductFromBD = (product) => {
  // return axios
  //   .post(`http://localhost:3001/api/admin/add`, product)
  //   .then((res) => res.data)
  //   .then((response) => response)
}
