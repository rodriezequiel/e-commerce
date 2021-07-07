const { User, Product, Category } = require("./db/index");

const categorys = [
  { name: "surf" },
  { name: "skate" },
  { name: "hombre" },
  { name: "mujer" },
  { name: "abrigo"},
  { name: "remera"},
 
];

const user = [
  {
    firstName: "Julian",
    lastName: "Perez",
    email: "julian@test.com",
    password: "1234",
    isAdmin: false,
  },
  {
    firstName: "admin",
    lastName: "Moroni",
    email: "admin@test.com",
    password: "asdasd",
    isAdmin: true,
  },
  {
    firstName: "Rodri",
    lastName: "Bacigalupo",
    email: "rodri@test.com",
    password: "rodri",
    isAdmin: true,
  },
];

const product = [
  {

    name: "Remera Palawan",

    description:
      "Remera PALAWAN (algodón) fino color negra lavado vintage con estampado 3D UNDERWAVE y la ola atrás en cerigrafía Grifa UW en la parte interior derecha.",
    price: 800,
    stock: 40,
    size: "m",
    color: "gris",
    brand: "Nike",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/01/Palawan-scaled.jpg",
      "https://underwavebrand.com/wp-content/uploads/2020/07/IMG_8720.jpg"
      
    ],
    categorys: ["hombre", "abrigo"]
  },
  {

    name: "Remera Palawan",

    description:
      "Remera PALAWAN (algodón) fino color negra lavado vintage con estampado 3D UNDERWAVE y la ola atrás en cerigrafía Grifa UW en la parte interior derecha.",
    price: 700,
    stock: 50,
    size: "l",
    color: "negra",
    brand: "Nike",
    picture: [
     "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02688-scaled.jpg",
     "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02682-710x1015.jpg"
      
    ],
    categorys: ["hombre", "abrigo"]
  },
  {

    name: "Hoodie Parbat",

    description:
      "Buzo con capucha Parbat de frisa invisible blanca con estampado box en el frente pecho izq y espalda",
    price: 1500,
    stock: 30,
    size: "m",
    color: "blanco",
    brand: "Nike",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9745-min-710x1093.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-01-at-09.58.25-1-710x881.jpeg"
    ],
    categorys: ["mujer", "abrigo"]
  },

  {

    name: "Hoodie Parbat",

    description:
      "Buzo con capucha Parbat de frisa invisible blanca con estampado box en el frente pecho izq y espalda",
    price: 1500,
    stock: 30,
    size: "l",
    color: "negro",
    brand: "Nike",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9745-min-710x1093.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-01-at-09.58.25-1-710x881.jpeg"
    ],
    categorys: ["mujer", "abrigo"]
  },
  {

    name: "Camisa Haya",

    description:
      "Camisa Haya de corderoy premium color marron claro Etiqueta UW en el frente inferior izquierdo.",
    price: 1500,
    stock: 30,
    size: "l",
    color: "marron",
    brand: "adidas",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/07/DSC04279-710x1065.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/07/DSC04277-710x1065.jpg"
    ],
    categorys: ["hombre"]
  },
  {

    name: "Camisa Haya",

    description:
      "Camisa Haya de corderoy premium color marron claro Etiqueta UW en el frente inferior izquierdo.",
    price: 1500,
    stock: 30,
    size: "m",
    color: "blanco",
    brand: "adidas",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/07/DSC04279-710x1065.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/07/DSC04277-710x1065.jpg"
    ],
    categorys: ["hombre"]
  },
  {

    name: "Pantalón chino Sacramento",

    description:
      "Pantalon Chino Sacramento achupinado Ripon de gabardina gris con lycra, 97% algodón y 3% spandex",
    price: 2000,
    stock: 54,
    size: "38",
    color: "negro",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03269-min-500x750.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03269-min-710x1065.jpg"
    ],
    categorys: ["hombre","skate"]
  },
  {

    name: "Pantalón chino Sacramento",

    description:
      "Pantalon Chino Sacramento achupinado Ripon de gabardina gris con lycra, 97% algodón y 3% spandex",
    price: 2000,
    stock: 54,
    size: "40",
    color: "azul",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03269-min-500x750.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03269-min-710x1065.jpg"
    ],
    categorys: ["hombre","skate"]
  },
  {

    name: "Remera Ana Black",

    description:
      "Remera ANA de jersey algodón negro con estampado en el frente izq y estampado en la espalda",
    price: 200,
    stock: 54,
    size: "40",
    color: "negro",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02682-710x1015.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02688-710x1073.jpg"
    ],
    categorys: ["hombre","skate", "remera"]
  },
  {

    name: "Remera Ana Black",

    description:
      "Remera ANA de jersey algodón negro con estampado en el frente izq y estampado en la espalda",
    price: 200,
    stock: 54,
    size: "36",
    color: "marron",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02682-710x1015.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC02688-710x1073.jpg"
    ],
    categorys: ["hombre","skate", "remera"]
  },
  {

    name: "Hoodie Aconcagua",

    description:
      "Buzo con capucha Makalu de frisa invisible piel gastado con logo estampado 3D en el frente pecho izq y ola en la espalda.",
    price: 2000,
    stock: 54,
    size: "m",
    color: "rosa",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9710-min-710x1039.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9792-min-710x1065.jpg"
    ],
    categorys: ["hombre","skate", "abrigo"]
  },
  {

    name: "Hoodie Aconcagua",

    description:
      "Buzo con capucha Makalu de frisa invisible piel gastado con logo estampado 3D en el frente pecho izq y ola en la espalda.",
    price: 2000,
    stock: 34,
    size: "l",
    color: "negro",
    brand: "hollyster",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9710-min-710x1039.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/04/IMG_9792-min-710x1065.jpg"
    ],
    categorys: ["hombre","skate", "abrigo"]
  },
  {

    name: "TABLA SLINGSHOT",

    description:
      "The Valley es una tabla exclusiva para parques y, sin duda, la tabla más fácil de manipular  en los obstáculos, brindando una sensación de suavidad  con un mínimo esfuerzo.",
    price: 8000,
    stock: 14,
    size: "1.20mt",
    color: "negro",
    brand: "aconcagua",
    picture: [
      "https://santatabla.com/shop/img/post/2942/valley-2.jpg",
      "https://santatabla.com/shop/img/post/2942/tabla-valley-2021-1.jpg"
    ],
    categorys: ["hombre","mujer","surf"]
  },
  {

    name:"tabla de surf ",

    description:
      "La tabla TRIP es funcional, versátil y duradera. La nueva construcción de tablones proporciona el máximo rendimiento",

    price: 9000,
    stock: 19,
    size: "1.30mt",
    color: "azul",
    brand: "aconcagua",
    picture: [
      "https://i.pinimg.com/236x/d0/42/b8/d042b8e3cba1fe4c809e41af2221bc64--in-style-surf-style.jpg",
  
    ],
    categorys: ["hombre","mujer","surf"]
  },
  {

    name: "tabla de skate",

    description:
      "tabla de skate echa para el maximo rendimiento del usuario",
    price: 5000,
    stock: 19,
    size: "30cm",
    color: "negra",
    brand: "cristobal colon",
    picture: [
      "https://image.freepik.com/foto-gratis/tabla-skate-fondo-blanco_110488-881.jpg",
  
    ],
    categorys: ["hombre","mujer","surf"]
  },
  {

    name: "Musculosa Mystic",

    description:
      "Musculosa MYSTIC (algodón) fino lavada rosa ladrillo con estampado UNDERWAVE en el pecho frente izquierdo y la espalda El corte de la musculosa es cómo una remera cortada",
    price: 500,
    stock: 19,
    size: "m",
    color: "rosa",
    brand: "cristobal colon",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/02/DSC06409-min-1-710x1039.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/02/DSC06415-min-1-710x1064.jpg"
  
    ],
    categorys: ["hombre"]
  },
  {

    name: "Musculosa Mystic",

    description:
      "Musculosa MYSTIC (algodón) fino lavada rosa ladrillo con estampado UNDERWAVE en el pecho frente izquierdo y la espalda El corte de la musculosa es cómo una remera cortada",
    price: 500,
    stock: 19,
    size: "l",
    color: "roja",
    brand: "cristobal colon",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/02/DSC06409-min-1-710x1039.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/02/DSC06415-min-1-710x1064.jpg"
  
    ],
    categorys: ["hombre"]
  },
  {

    name: "Pantalón chino Ripon",

    description:
      "Pantalon Chino achupinado Ripon de gabardina beige con lycra, 97% algodón y 3% spandex.",
    price: 3400,
    stock: 19,
    size: "36",
    color: "marron",
    brand: "cristobal colon",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03317-710x1065.jpg",
      "https://underwavebrand.com/wp-content/uploads/2021/06/DSC03336-710x1065.jpg"
  
    ],
    categorys: ["hombre"]
  },
  {

    name: "Bermuda Gambia",

    description:
      "Bermuda de gabardina verde militar premium 18 Botón y cierre de calidad y doble bolsillo trasero Etiquetas bordadas UW en el talle y el el dorso",
    price: 4400,
    stock: 33,
    size: "36",
    color: "verde",
    brand: "cristobal colon",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2020/11/DSC04718-min-710x995.jpg",
      "https://underwavebrand.com/wp-content/uploads/2020/11/DSC04723-min-710x1064.jpg"
  
    ],
    categorys: ["hombre"]
  },
  {

    name: "Bermuda Gambia",

    description:
      "Bermuda de gabardina verde militar premium 18 Botón y cierre de calidad y doble bolsillo trasero Etiquetas bordadas UW en el talle y el el dorso",
    price: 4400,
    stock: 33,
    size: "38",
    color: "negro",
    brand: "cristobal colon",
    picture: [
      "https://underwavebrand.com/wp-content/uploads/2020/11/DSC04718-min-710x995.jpg",
      "https://underwavebrand.com/wp-content/uploads/2020/11/DSC04723-min-710x1064.jpg"
  
    ],
    categorys: ["hombre"]
  }
];


// const cart = [{ state: "inProgress" }, { state: "inProgress" }];
// User.bulkCreate(user, { returning: true }).then(
//   (user) => console.log('usuarios creados')
// process.exit()
// )

Product.bulkCreate(product, { returning: true }).then(
  (product) => console.log("product creados")
  // process.exit()
);

Category.bulkCreate(categorys, { returning: true }).then(
  (product) => console.log("categorys creados")
  // process.exit()
);

// Cart.bulkCreate(cart, { returning: true }).then((cart) =>
//   console.log('carritos creados ok')
// )
