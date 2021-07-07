import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import changeOption from "../utils/changeOption";
import { colors, colorClass, talles, talleClass } from "../utils/globals";
import { addProductToCartBD } from "../utils/index";

function SingleProduct() {
  const [color, setColor] = useState("");
  const [talle, setTalle] = useState("");
  const [counter, setCounter] = useState(1);

  //Obtengo productos del carrito
  const cart = useSelector((state) => state.cart);

  //Agregando producto al carrito
  const addProduct = () => {
    addProductToCartBD("productToAdd");
  };

  return (
    <div>
      <Navbar transparent={false} />
      <div className="container-fluid">
        <div className="row mx-5 my-3 px-5">
          <div className="col-6 text-end px-1 py-3">
            <div className="row">
              <div className="col-3">
                {picture.map((picture, i) => (
                  <div style={{ background: "rgba(0,0,0,0.3)" }}>
                    <img
                      src={picture}
                      class=""
                      style={{ width: "120%", height: "20%" }}
                    />
                  </div>
                ))}
              </div>
              <div className="col-9">
                <img
                  src={picture[0]}
                  class=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="col-6 text-end px-5 py-3">
            <div className="py-3">
              <h2>
                <strong>Campera de Cuero</strong>
              </h2>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <i class="bi bi-star"></i>
            </div>
            <div className="py-3">
              <h3>
                <strong>$200</strong>
              </h3>
            </div>

            <div className="py-2">
              <p>Talle</p>
              <div>
                {talles.map((talle) => (
                  <i
                    id={talle}
                    class={talleClass.empty}
                    onClick={(e) =>
                      changeOption(e.target, talles, talleClass, setTalle)
                    }
                  >
                    {talle}
                  </i>
                ))}
              </div>
            </div>
            <div className="py-2">
              <p>Color</p>
              <div>
                {colors.map((color) => (
                  <i
                    id={color}
                    class={colorClass.empty}
                    style={{ color }}
                    onClick={(e) =>
                      changeOption(e.target, colors, colorClass, setColor)
                    }
                  ></i>
                ))}
              </div>
            </div>
            <div className="d-flex flex-row-reverse py-3">
              <button
                className="btn btn-dark btn-sm px-3"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
              <button className="btn btn-outline-dark px-3 disabled fs-5">
                {counter}
              </button>
              <button
                className="btn btn-dark btn-sm px-3 "
                onClick={() => (counter !== 1 ? setCounter(counter - 1) : "")}
              >
                -
              </button>
            </div>

            <div>
              <button className="btn btn-dark fs-5" onClick={() => {}}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
