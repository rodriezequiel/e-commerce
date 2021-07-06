const { User, Product, Category } = require("./db/index");

const categorys = [
  { name: "surf" },
  { name: "skate" },
  { name: "hombre" },
  { name: "mujer" },
  { name: "buzos"},
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
    firstName: "Ivan",
    lastName: "Moroni",
    email: "ivan@test.com",
    password: "12345",
    isAdmin: false,
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
    name: "campera de cuero",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 100,
    stock: 50,
    size: "L",
    color: "Marron",
    brand: "Nike",
    picture: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },

  {
    name: "campera de JEAN",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 400,
    stock: 20,
    size: "S",
    color: "Verde",
    brand: "Puma",
    picture: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "M",
    color: "Azul",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "S",
    color: "Azul",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "L",
    color: "Azul",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "L",
    color: "Verde",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "L",
    color: "Negro",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },
  {
    name: "campera CUERO extra slim",
    description:
      "Esta es una descripcion de prueba que muestra la informacion de campera",
    price: 200,
    stock: 20,
    size: "L",
    color: "Negro",
    brand: "Adidas",
    picture: [
      "https://images.unsplash.com/photo-1542847957-80a6beffcbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1200&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    ],
  },

 { 
    name: "buzo",
    description:
      "ENVOLVETE CON LA COMODIDAD DE UN CLÁSICO BUZO CON CAPUCHA QUE TODOS CONOCEMOS Y AMAMOS",
    price: 300,
    stock: 11,
    size: "m",
    color: "negro",
    brand: "adidas",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_948552-MLA45740536607_042021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_698306-MLA45740530673_042021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_932949-MLA45740552497_042021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_707435-MLA45740541577_042021-F.webp",
    ],
  },
  { 
     name: "buzo",
     description:
       "ENVOLVETE CON LA COMODIDAD DE UN CLÁSICO BUZO CON CAPUCHA QUE TODOS CONOCEMOS Y AMAMOS",
     price: 300,
     stock: 11,
     size: "s",
     color: "azul",
     brand: "adidas",
     picture: [
     "https://http2.mlstatic.com/D_NQ_NP_807416-MLA45802731254_052021-O.webp",
     "https://http2.mlstatic.com/D_NQ_NP_752412-MLA45802731252_052021-O.webp",
     "https://http2.mlstatic.com/D_NQ_NP_811800-MLA45802731249_052021-O.webp"

     ],
   },
  {
    name: "tabla de skate",
    description:
      "TABLA Profesional de Guatambu de 7 láminas pegadas con Resina EpoxiEstampada con HEAT TRANSFER",
    price: 1000,
    stock: 11,
    size: "20",
    color: "blanca y azul",
    brand: "Imperio",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_649795-MLA46585951144_072021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_685175-MLA46608689409_072021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_944750-MLA46608633970_072021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_707022-MLA46608682462_072021-O.webp",
    ],
  },
  {
    name: "skate profesional",
    description:
      "TABLA Profesional de Guatambu de 7 láminas pegadas con Resina EpoxiEstampada con HEAT TRANSFER",
    price: 1000,
    stock: 11,
    size: "20",
    color: "blanca y azul",
    brand: "Imperio",
    picture: [
    "https://http2.mlstatic.com/D_NQ_NP_883322-MLA45991887522_052021-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_631201-MLA45991868736_052021-O.webp"
    ],
  },
  {
    name: "skate a cuadros",
    description:
      "skate Profesional de skate usada por los mejores",
    price: 3300,
    stock: 21,
    size: "30cm",
    color: "blanca/negro",
    brand: "vans",
    picture: [
   "blob:https://web.whatsapp.com/2f80b36a-8031-4eab-867b-b1c1a2bbac2f"
    ],
  },
  {
    name: "tabla de surf",
    description:
      "Diseñada especialmente para principiantes que buscan su primera tabla y escuelas de Surf",
    price: 3000,
    stock: 9,
    size: "244 Cm",
    color: "roja",
    brand: "Bic Sports",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_904484-MLA31581311685_072019-O.webp0",
      "https://http2.mlstatic.com/D_NQ_NP_904484-MLA31581311685_072019-O.webp",
    ],
  },
  {
    name: "short",
    description:
      "el short mas usado para ir al mar ",
    price: 600,
    stock: 52,
    size: "s",
    color: "gris",
    brand: "bermie",
    picture: [
      "https://www.jcrew.com/s7-img-facade/AV374_PP1002_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850",
      "https://www.jcrew.com/s7-img-facade/AV374_PP1002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850"
    ],
  },
  {
    name: "short uki",
    description:
      "el short mas usado para ir al mar ",
    price: 700,
    stock: 32,
    size: "m",
    color: "gris",
    brand: "bermie",
    picture: [
      "https://www.jcrew.com/s7-img-facade/AV307_PP0987_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850",
      "https://www.jcrew.com/s7-img-facade/AV307_PP0987?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850"
    ],
  },
  {
    name: "short uki",
    description:
      "el short mas usado para ir al mar ",
    price: 700,
    stock: 10,
    size: "s",
    color: "rojo",
    brand: "bermie",
    picture: [
      "https://www.jcrew.com/s7-img-facade/AV295_PP0979_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850",
      "https://www.jcrew.com/s7-img-facade/AV295_PP0979?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850"

    ],
  },

  {
    name: "tabla de surf pro",
    description:
      "TABLAS DE KITE SURF  SURFERA PRO SERIE STICKWAVE TRIPLE LAMINACION CON REFUERZO DE KEBLAR EN QUILLAS Y DOBLE ALMA DE CARBONO TANTO EN DECK COMO EN BOTTOM",
    price: 3200,
    stock: 6,
    size: "244 Cm",
    color: "azul",
    brand: "Bic Sports",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_959855-MLA46094902694_052021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_959855-MLA46094902694_052021-O.webp",
    ],
  },
  {
    name: "remeras",
    description:
      "REMERA PRIMITIVE SKATEBOARDING BLOOM / IMPORTADAS",
    price: 200,
    stock: 20,
    size: "m",
    color: "blanca",
    brand: "Primitive",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_773474-MLA44665764927_012021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_754708-MLA44665782407_012021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_681020-MLA44665764930_012021-F.webp"
    ],
  },
  {
    name: "remera Skateboard",
    description:
      "Corte a un ajuste relajado para la máxima comodidad y flexibilidad, diseñado con un elastano de poliéster duradero. Logo estampado en frente y dorso.",
    price: 210,
    stock: 27,
    size: "s",
    color: "negra",
    brand: "Huf",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_985876-MLA31606267863_072019-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_694157-MLA31606266454_072019-O.webp",
    ],
  },
  {
    name: "chaqueta",
    description:
      "Chaqueta tipo Coach camuflada con forro negro y estampados del logo naranja de seguridad",
    price: 2100,
    stock: 35,
    size: "m",
    color: "militar",
    brand: "Thrasher",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_885435-MLA46220533269_052021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_945647-MLA42751507493_072020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_782763-MLA42751500639_072020-O.webp"
    ],
  },
  {
    name: "buzo-campera para hombre",
    description:
      "Buzo Campera Hombre Capucha Chelsea Market Canguro Nuevo.",
    price: 700,
    stock: 18,
    size: "m",
    color: "negro",
    brand: "cm",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_713149-MLA41247984329_032020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_613612-MLA41247981332_032020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_733900-MLA41247956486_032020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_879084-MLA41247980335_032020-O.webp"
    ],
  },
  {
    name: "buzo",
    description:
      "85% algodón - 15% poliéster Buzo canguro de frisa invisible con grifa de la marca al frente.",
    price: 1700,
    stock: 40,
    size: "l",
    color: "negro-marron-blanco",
    brand: "billabong",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_670311-MLA46451166000_062021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_784481-MLA46451211109_062021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_690189-MLA46451210110_062021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_803512-MLA46451164797_062021-O.webp"
    ],
  },
  {
    name: "remera",
    description:
      "remera billabong lo ultimo de la moda inglesa",
    price: 900,
    stock: 30,
    size: "m",
    color: "negro",
    brand: "billabong",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_784772-MLA45227666750_032021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_795309-MLA45600493393_042021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_816764-MLA45600496323_042021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_615788-MLA45600488637_042021-O.webp"
    ],
  },
  {
    name: "buzo para mujer",
    description:
      "Buzo estilo Corto para Mujer / Adolescentes a partir de 12/13 años dependiendo altura (Chequear las medidas)",
    price: 500,
    stock: 11,
    size: "m",
    color: "blanco",
    brand: "adidas",
    picture: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_903230-MLA46498010249_062021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_903230-MLA46498010249_062021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_712969-MLA46567245112_062021-O.webp",
      "",
    ],
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
