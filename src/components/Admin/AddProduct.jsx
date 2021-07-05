import React, { useState } from 'react'
import { addProduct } from '../../utils/index'

function AddProduct({ setNewProduct, newProduct }) {
  const [product, setProduct] = useState({})
  const handleChange = (e) => {
    const { value, name } = e.target
    setProduct({ ...product, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct(product).then(() => setNewProduct(false))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre'
          name='name'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='descripcion'
          name='description'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='stock'
          name='stock'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='talle'
          name='size'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='precio'
          name='price'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='color'
          name='color'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='imageURLS'
          name='picture'
          defaultValue='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          confirmar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            setNewProduct(false)
          }}
        >
          cancelar
        </button>
      </form>
    </div>
  )
}

export default AddProduct
