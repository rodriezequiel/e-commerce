const router = require("express").Router();
const jwt = require("jsonwebtoken");
const {User, Cart} = require("../db/index");

const secret = "$2b$10$/skdhli/rZNMa9uRsSOdX.";


router.post("/login", (req, res) => {
  const { email, password } = req.body;
  return User.findOne({ where: { email } }).then(user => {
    user.isValidPassword(password).then(bool => {
      if (bool) {
        const accessToken = jwt.sign({ email: user.email, isAdmin: user.isAdmin }, secret);
        res.cookie('access', accessToken, {httpOnly:true});
        return res.json(user);
      } else return res.send("username or password incorrect");
    });
  });
});

router.post("/register", (req, res) => {
  return User.create(req.body)
    .then(user => user.createCart({ state: 'InProgress' })
        .then(loco => res.status(201).json(user))
    )
    .catch(err => {
      if (err.original.code === "23505") return res.sendStatus(409);
      console.log(err);
    });
});

router.post('/logout', (req, res) =>{
    res.clearCookie('access');
    res.sendStatus(200);
})

module.exports = router;
