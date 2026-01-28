const bcrypt = require("bcrypt");
const User = require("../models/usersModel");

exports.createAdmin = async (req,res) => {
    try {
        const { full_name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await User.create({
            full_name,
            email,
            password: hashedPassword,
            role: "admin"
        });

        res.status(200).json({ message : "Admin Created" , adminId : admin.id})
    } catch (error) {
        res.status(500).json({message : "Server Error" ,error : error.message})
    }
}
