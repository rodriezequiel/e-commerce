import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/index'
import AddProduct from './AddProduct'
import { Styles } from './Styles'
import Table from './TestTable'

function AdminSingleProduct() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Info general',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'description',
            accessor: 'description',
          },
          {
            Header: 'stock',
            accessor: 'stock',
          },
          {
            Header: 'size',
            accessor: 'size',
          },
          {
            Header: 'price',
            accessor: 'price',
          },
          {
            Header: 'color',
            accessor: 'color',
          },
        ],
      },
    ],
    []
  )
  const [data, setData] = useState([])
  const [updatedProduct, setUpdatedProduct] = useState([])
  const [newProduct, setNewProduct] = useState(false)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  useEffect(() => {
    getAllProducts().then((products) => setData(products))
  }, [])

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData((old) => {
      return old.map((row, index) => {
        if (index === rowIndex) {
          const returnVal = {
            ...old[rowIndex],
            [columnId]: value,
          }
          setUpdatedProduct(returnVal)

          return returnVal
        }
        return row
      })
    })
  }

  const handleAction = (e) => {
    const { value } = e.target
    if (e.key === 'Enter') {
      const newData = data.filter((product) => {
        if (product.name.toUpperCase().includes(value.toUpperCase()))
          return true
        else return false
      })
      setData(newData)
    }
  }

  const handleAddProduct = () => {
    setNewProduct(true)
  }

  return (
    <>
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <button
        onClick={() => getAllProducts().then((products) => setData(products))}
      >
        Remover filtro
      </button>
      <input type='text' onKeyPress={handleAction} />
      {newProduct && (
        <div>
          <AddProduct setNewProduct={setNewProduct} newProduct={newProduct} />
        </div>
      )}
      <Styles>
        <Table
          columns={columns}
          data={data}
          updateMyData={updateMyData}
          skipPageReset={skipPageReset}
        />
      </Styles>
    </>
  )
}

export default AdminSingleProduct
