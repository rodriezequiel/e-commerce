import React, { useEffect, useState } from "react";
import { addProduct } from "../../utils/index";
import { getAllCategoriesfromBD } from "../../utils/index";

function AddProduct({ setNewProduct }) {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);

  // este useEffect es para traer todas las categorias y poder utilizarlos en el select del form
  useEffect(() => {
    getAllCategoriesfromBD().then((categories) => setCategories(categories));
  }, []);

  console.log("ACAAAA-->", categories); // borrar

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleOnclick = (e) => {
    console.log(e.target.name);
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  console.log("PRODUCTO FINAL --->", product);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ACA ESTAN LOS PRODUCTOS -->>", product);
    addProduct(product).then(() => setNewProduct(false));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="descripcion"
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="talle"
          name="size"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="precio"
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="imageURLS"
          name="picture"
          defaultValue="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          onChange={handleChange}
        />
        <select name="categories" id="categories" onClick={handleOnclick}>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          confirmar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNewProduct(false);
          }}
        >
          cancelar
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
