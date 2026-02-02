const bcrypt = require('bcrypt');
const User = require('../models/usersModel');
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    try {

//  {
//   "full_name": "Angelo Garcia",
//   "email": "garcia@email.com",
//   "password": "password123"
// }
        const {full_name , email , password } = req.body;
        const saltRouunds = 10

        const existingEmail = await User.findOne({where :{email}});
        if(existingEmail){
            return res.status(400).json({
                message : "Email is already registered."
            });
        }

        const hashedPassword = await bcrypt.hash(password , saltRouunds);

        const user = User.create({
            full_name,
            email,
            password: hashedPassword,
            role: "user"
        });


        res.status(201).json({
            message:"User Registered Successully",
            user
        })
        
    } catch (error) {
        res.status(500).json({ 
            error : error.message
        });
    }
}


exports.login = async(req,res)=>{
    try {
        const {email , password} = req.body;
        const user = await User.findOne({where : {email}});

        if(!user){
            return res.status(404).json({message : "User Not Found"});
        }

        const userExist = await bcrypt.compare(password ,user.password);
        if(!userExist){
            return res.status(401).json({message : "Log-in Failed"});
        }

        const token = jwt.sign(
            {
                id : user.id,
                role : user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn : process.env.JWT_EXPIRES_IN
            }
        )

        res.json({message : "Log-in Successully", token});
    
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

exports.authUser = async (req,res) =>{
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ["password"] }
        });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

