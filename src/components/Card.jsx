import React, { useEffect, useState } from 'react'
import { getProducts } from '../utils/index'
import { Link } from 'react-router-dom'

export default function Card() {
  const [products, setProducts] = useState([])
  const [imgs, setImgs] = useState([])
  useEffect(() => {
    getProducts().then((products) => {
      const [name, img] = products
      const keys = Object.keys(name)

      setProducts(keys)
      setImgs(img)
    })
  }, [])

  return (
    <>
      {products.map((product, index) => {
        return (
          <div className='col-lg-4 col-sm-6 pb-4' key={index}>
            <Link to={`/shop/${product}`}>
              <div
                className='card mx-4 shadow-lg mt-3 bg-body rounded'
                style={{ width: 'auto', minWidth: 'auto', maxWidth: '300px' }}
              >
                <img
                  src={imgs[index]}
                  className='card-img-top'
                  alt='Movie poster'
                  style={{ maxHeight: '35vh', minHeight: '35vh' }}
                />
                <div className='card-body pb-0'>
                  <p
                    style={{
                      fontSize: '1.5rem',
                      lineHeight: '1rem',
                      margin: '1%',
                      padding: '1%',
                    }}
                  >
                    {product}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
