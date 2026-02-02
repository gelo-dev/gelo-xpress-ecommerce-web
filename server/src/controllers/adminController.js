const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
const streamifier = require("streamifier")
const User = require("../models/usersModel");
const Product = require("../models/productsModel")

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


exports.uploadProduct = async (req,res) => {
        try {
            if (!req.file) {
            return res.status(400).json({ message: "No file provided" });
            }

            const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "products" },

            async (error, result) => {
                if (error) {
                return res.status(500).json({ message: error.message });
                }

            const newProduct = await Product.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                stock: req.body.stock,
                image: result.secure_url,
                public_iD: result.public_id
            });

            res.json({message: "Product created with image",product: newProduct});
        }
        );

        streamifier.createReadStream(req.file.buffer).pipe(uploadStream);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
