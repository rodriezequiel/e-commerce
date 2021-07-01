const { User, Product, Order, Cart, Category } = require("./db/index");

const categorys = [
  { name: "surf" },
  { name: "skate" },
  { name: "hombre" },
  { name: "mujer" },
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
    isAdmin: false,
  },
];

const product = [
  {
    name: "campera de prueba",
    price: 100,
    stock: 50,
  },
  {
    name: "mochila",
    price: 200,
    stock: 10,
  },
  {
    name: "tabla de surf",
    price: 150,
    stock: 2,
  },
];

const cart = [{ state: "inProgress" }, { state: "inProgress" }];
User.bulkCreate(user, { returning: true }).then(
  (user) => console.log("usuarios creados")
  // process.exit()
);
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
