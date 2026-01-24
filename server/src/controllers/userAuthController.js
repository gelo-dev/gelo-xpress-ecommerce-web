const bcrypt = require('bcrypt');
const User = require('../models/usersModel')

exports.register = async(req,res)=>{
    try {

//  {
//   "full_name": "Angelo Garcia",
//   "email": "garcia@email.com",
//   "password": "password123"
// }
        const {full_name , email , password } = req.body;
        const saltRouunds = 10
        const hashedPassword = await bcrypt.hash(password , saltRouunds);

        const user = User.create({
            full_name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            message:"Useer Registered Successgully",
            user
        })
        
    } catch (error) {
        res.status(500).json({ 
            error : error.message
        });
    }
}
