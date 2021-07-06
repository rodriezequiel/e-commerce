export default function Tables({ items, user, deleteItem }) {
  return (
    <table className='table' style={{ 'font-size': '25px' }}>
      <thead>
        <tr>
          <th scope='col'>Producto</th>
          <th scope='col'>Precio Unitario</th>
          <th scope='col'>Marca</th>
          <th scope='col'>Color</th>
          <th scope='col'>Talle</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Subtotal</th>
          <th scope='col'> </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <div>
                <img
                  style={{ width: '100px' }}
                  src={item.picture[0]}
                  alt={item.name}
                ></img>
              </div>
              <p> {item.name}</p>
            </td>
            <td>${item.price}</td>
            <td>{item.brand}</td>
            <td>{item.color}</td>
            <td>{item.size}</td>
            <td>{item.CartItem.quantity}</td>
            <td>{item.CartItem.quantity * item.price}</td>
            <td scope='col'>
              <i
                className='bi bi-trash-fill'
                onClick={() => {
                  deleteItem(user, item)
                }}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
