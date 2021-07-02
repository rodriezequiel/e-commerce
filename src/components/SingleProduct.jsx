Rodri
#2054

Iván Moroni — 05/05/2021
rodri nos modras dar una mano
Iván Moroni — 05/05/2021
rodri  help!
Rodri — 05/05/2021
ivan
dale bancame
Iván Moroni — 05/05/2021
dale graicas :slight_smile:
Rodri — 05/05/2021
contains(valor){
        if(valor < this.value){
            if(this.left){
                return this.left.contains(valor);
            }else{
                return false;
            }
        }else if(valor > this.value){
            if(this.right){
                return this.right.contains(valor);
            }else {
                return false;
            }
        }else{
            return true;
        }
    }
Iván Moroni — 26/06/2021
hola rodri como andas? estoy pensando armar un grupo de whast ap para el ecommerce
me podrias pasar tu numero ?
Rodri — 26/06/2021
ivann
como va
obviooo
11 2465-2894
Iván Moroni — 26/06/2021
dale buenisimo !
ahora te agrego
Iván Moroni — 28/06/2021
https://discord.gg/x7xXfxPv
Iván Moroni — ayer a las 12:32
https://auth0.com/docs/quickstart/backend/nodejs
Auth0 Docs
Auth0 Node (Express) API SDK Quickstarts: Authorization
This tutorial demonstrates how to add authorization to an Express.js API.

Rodri — ayer a las 14:10
ivann
estas?
Iván Moroni — ayer a las 14:10
si si
Rodri — ayer a las 14:12
https://prod.liveshare.vsengsaas.visualstudio.com/join?3D66C7851C44015CB70D8572E433F064634A
Join my Visual Studio Live Share session
Real-time collaborative development

Iván Moroni — ayer a las 16:44
esta ?
Rodri — ayer a las 17:04
estoy en el dos ivan
Iván Moroni — ayer a las 17:40
https://www.youtube.com/watch?v=mbsmsi7l3r4
YouTube
Web Dev Simplified
JWT Authentication Tutorial - Node.js

Rodri — hoy a las 12:41
justify-content-end
Rodri — hoy a las 12:58
https://getbootstrap.com/docs/5.0/components/carousel/
Carousel
A slideshow component for cycling through elements—images or slides of text—like a carousel.

Iván Moroni — hoy a las 13:19
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { getOneProduct } from "../utils/index";
import { addToCart } from "../state/cart";
Expandir
SingleProduct.jsx
7 KB
﻿
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
  const cart = useSelector((state) => state.cart);
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
      .then((products) => {
        setSingleProduct(products);
        return products;
      })
      .then((info) => {
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
      setSize((size) => [...size, product.size]);
      setSize((size) => [...new Set(size)]);
      setColor((color) => [...color, product.color]);
      setColor((color) => [...new Set(color)]);
      setStock((stock) => [...stock, product.stock]);
      setStock((stock) => [...new Set(stock)]);
    });
  }, [singleProduct]);

  const addProduct = () => {
    let productToAdd = searchProductId();
    productToAdd = { ...productToAdd, quantity: counter, UserId: cart.UserId };
    addProductToCartBD(productToAdd);
  };

  const searchProductId = () => {
    const prod = singleProduct.filter((product) => {
      return product.color === selectedColor && product.size === selectedSize;
    });
    return prod[0];
  };

  //limpiar esta funcion
  const handleChange = (e) => {
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
        <div className="row mt-5 ">
          <div className="col-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
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
              <div class="carousel-inner">
               { picture.map((pic,index) => (
                <div class={`carousel-item ${ (!index)? "active" : null }`}>
                  <img src={ pic } class="d-block w-100" alt={name} />
                </div>))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

           
          </div>

          <div className="col-6 ">
            <div className="container-fluid justify-content-center  ">
              <h1>{name}</h1>
              <h2>${price}</h2>

              <h1>Add to cart: </h1>
              <button onClick={() => setCounter(counter + 1)}>+</button>
              <h4>{counter}</h4>
              <button onClick={() => setCounter(counter - 1)}>-</button>
              <button onClick={() => addProduct()}>Add to cart</button>

              <p>{description}</p>
              <h3>{brand}</h3>
              <label for="size">Elige un talle</label>
              <select
                name="size"
                onChange={(e) => handleChange(e)}
                id="size"
              ></select>
              <label for="color">Elige un color</label>
              <select name="color" onChange={handleChange} id="color">
                {color.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <button onClick={() => history.goBack()}>Go back</button>
              {size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;