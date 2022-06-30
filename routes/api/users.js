
const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

//@route    POST api/users
//@desc     Register user
//@access   Public

//register
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Email is not valid').isEmail(),
    check('password','Password must be at least 5 character').isLength({min:5}),
],async(req,res)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()}); 
   }

   const {name,email,password,address,country,phone,bank_acc} = req.body;

   try {
        //check if user exist or not
        let user = await User.findOne({email});
        if(user){
           return res.status(400).json({errors:[{msg:"User already exist"}]});
        }

        //creating instance
        user = new User({
            name,email,password,address,country,phone,bank_acc
        })

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        //save user
        await user.save();
        
        //return jwt
        const payload = {
            user:{
                id:user.id //no need to use _id in mongoose
            }
        }
       jwt.sign(
           payload,
           config.get('jwtSecret'),
           {expiresIn:3600},
           (err,token)=>{
               if(err) throw err;
               return res.json({token});
           }
       );
   } catch (error) {
        console.log(`Error in registration : ${error.message}`);
        return res.status(500).send('Server Error');
   }

    // res.send('User Registered!');
});

module.exports = router;