export default function Tables({ items, user, deleteItem }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">Subtotal</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <div>
                <img
                  style={{ width: "100px" }}
                  src={item.picture[0]}
                  alt={item.name}
                ></img>
              </div>
              <p> {item.name}</p>
            </td>
            <td>${item.price}</td>
            <td>{item.CartItem.quantity}</td>
            <td>{item.CartItem.quantity * item.price}</td>
            <td scope="col">
              <i
                className="bi bi-trash-fill"
                onClick={() => {
                  deleteItem(user, item);
                }}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
