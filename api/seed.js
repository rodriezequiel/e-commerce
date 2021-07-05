const { User, Product, Category } = require("./db/index");

const categorys = [{ name: "surf" }, { name: "skate" }, { name: "hombre" }, { name: "mujer" }];

// const user = [
//   {
//     firstName: "Julian",
//     lastName: "Perez",
//     email: "julian@test.com",
//     password: "1234",
//     isAdmin: false,
//   },
//   {
//     firstName: "Ivan",
//     lastName: "Moroni",
//     email: "ivan@test.com",
//     password: "12345",
//     isAdmin: false,
//   },
//   {
//     firstName: "Rodri",
//     lastName: "Bacigalupo",
//     email: "rodri@test.com",
//     password: "rodri",
//     isAdmin: true,
//   },
// ];

const product = [
  {
    name: "campera de prueba",
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
    description: "Esta es una descripcion de prueba que muestra la informacion de campera",
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
];

// const cart = [{ state: "inProgress" }, { state: "inProgress" }];
// User.bulkCreate(user, { returning: true }).then(
//   (user) => console.log('usuarios creados')
// process.exit()
// )

User.create({
  firstName: "Ivan",
  lastName: "Moroni",
  email: "ivan@test.com",
  password: "12345",
  isAdmin: false,
}).then(user => console.log("usuario creado", user));
Product.bulkCreate(product, { returning: true }).then(
  product => console.log("product creados")
  // process.exit()
);

Category.bulkCreate(categorys, { returning: true }).then(
  product => console.log("categorys creados")
  // process.exit()
);

// Cart.bulkCreate(cart, { returning: true }).then((cart) =>
//   console.log('carritos creados ok')
// )
