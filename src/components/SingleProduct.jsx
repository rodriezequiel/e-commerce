import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { getOneProduct } from "../utils/index";
import { addToCart } from "../state/cart";
import { addProductToCartBD } from "../utils/index";
import Navbar from "../components/Navbar";

function SingleProduct() {
  const param = useParams();
  const history = useHistory();
  //cart from redux
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  //states
  const [singleProduct, setSingleProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [picture, setPicture] = useState([]);
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [stock, setStock] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [productToAdd, setProductToAdd] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getOneProduct(param.name)
      .then(products => {
        setSingleProduct(products);
        return products;
      })
      .then(info => {
        const { name, description, brand, picture, price } = info[0];
        setName(name);
        setDescription(description);
        setBrand(brand);
        setPicture(picture);
        setPrice(price);
      });
  }, []);
  useEffect(() => {
    singleProduct.map((product, index) => {
      if (index === 0) {
        setSelectedColor(product.color);
        setSelectedSize(product.size);
      }
      setSize(size => [...size, product.size]);
      setSize(size => [...new Set(size)]);
      setColor(color => [...color, product.color]);
      setColor(color => [...new Set(color)]);
      setStock(stock => [...stock, product.stock]);
      setStock(stock => [...new Set(stock)]);
    });
  }, [singleProduct]);

  const addProduct = () => {
    let productToAdd = searchProductId();
    productToAdd = { ...productToAdd, quantity: counter, UserId: cart.UserId };
    addProductToCartBD(productToAdd);
  };

  const searchProductId = () => {
    const prod = singleProduct.filter(product => {
      return product.color === selectedColor && product.size === selectedSize;
    });
    return prod[0];
  };

  //limpiar esta funcion
  const handleChange = e => {
    const { value, name } = e.target;
    if (name === "color") {
      setSelectedColor(value);
      const AvailableSizes = singleProduct.reduce((acum, item) => {
        if (item.color === value) acum.push(item.size);
        return acum;
      }, []);

      setSize(AvailableSizes);
    }
    if (name === "size") {
      setSelectedSize(value);
      const AvailableColors = singleProduct.reduce((acum, item) => {
        if (item.size === value) acum.push(item.color);
        return acum;
      }, []);

      setColor(AvailableColors);
    }
  };

  return (
    <div>
      <Navbar transparent={false} />
      <div className="container-fluid">
        <div className="row my-5 ms-5">
          <div className="col-5 me-5 ms-2">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner mx-5">
                {picture.map((pic, index) => (
                  <div class={`carousel-item ${!index ? "active" : ""}`}>
                    <img
                      src={pic}
                      class="d-block w-auto"
                      alt={name}
                      style={{ width: "auto", height: "80vh" }}
                    />
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-6 d-flex  ps-5">
            <div className="container-fluid  ps-5">
              <h1>{name}</h1>
              <h2>${price}</h2>
              <h3>{brand}</h3>
              <p>{description}</p>
              <label for="color">Elige un color</label>
              <select className="me-5" name="color" onChange={handleChange} id="color">
                {color.map(color => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <label for="size">Elige un talle</label>
              <select className="mb-4" name="size" onChange={e => handleChange(e)} id="size">
                {size.map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
                <h4>Add to cart: </h4>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <h4 className="d-inline"> {counter} </h4>
                <button onClick={() => setCounter(counter - 1)}>-</button>
              <br /><br />
              <button onClick={() => addProduct()}>Add to cart</button>
              <button  className="ms-5" onClick={() => history.goBack()}>Go back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
