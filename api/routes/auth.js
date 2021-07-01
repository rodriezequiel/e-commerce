const router = require('express').Router();
const jwt = require('jsonwebtoken')
const User = require('../db/UserModels')

const secretProvisorio = 'yaberemosdijoelsiego'

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({where:{email, password}})
        .then(user=>{
            if(user){
                const accessToken = jwt.sign({ email: user.email,  isAdmin: user.isAdmin, passsword: user.passsword }, secretProvisorio);
                res.json({accessToken});
            }else{
                res.send('username or password incorrect')
            }
        })
});

module.exports = router;