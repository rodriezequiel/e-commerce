import React from 'react'
import { Link } from 'react-router-dom'
function AdminContainer() {
  return (
    <div>
      <Link to='/admin/productos'>Productos</Link>
      <h1>Soy Admin</h1>
    </div>
  )
}

export default AdminContainer
