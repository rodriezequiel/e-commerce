import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import AdminSingleProduct from './AdminSingleProduct'

function AdminProducts() {
  const history = useHistory()
  // const [products, setProducts] = useState([])

  return (
    <div>
      <AdminSingleProduct />

      <button onClick={() => history.goBack()}>Volver</button>
    </div>
  )
}

export default AdminProducts
