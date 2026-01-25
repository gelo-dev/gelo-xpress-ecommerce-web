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
            password: hashedPassword
        });


        res.status(201).json({
            message:"Useer Registered Successully",
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
            return res.status(401).json({message : "Invalid Password"});
        }

        res.json({message : "Log-in Successully"});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}
