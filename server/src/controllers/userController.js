const User = require('../models/usersModel')

exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.findAll({
            attributes : { exclude : ['password']} //specify the data you dont want to fetch "attributes"
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({error : error.message })
    }
};


exports.getUserById = async(req,res)=>{
    try {
        const users = await User.findByPk(req.params.id,{
            attributes : { exclude : ['password']}
        });
        if (!users) return res.status(404).json({ msg: "User not found" });
        res.json(users);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}