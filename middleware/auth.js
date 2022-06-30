const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){
    //get token from header
    const token = req.header('x-auth-token');

    //check if no token
    if(!token){
        return res.status(401).json({msg:'No token, authorization denied!'});
    }

    //verify token
    try {
        //decoded is an object having id that passed using payload user:{id:{...}}
        //just like payload format
        const decoded = jwt.verify(token,config.get('jwtSecret'));
      
        //attach the user(user id) with req to access it next
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({msg:'token not validated !'})
    }
}