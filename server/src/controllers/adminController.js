const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
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


exports.uploadProduct = async (req, res) => {
    try {
        if (!req.file) 
            return res.status(400).json({ message: "No file provided" });
        
            const fileBase64 = req.file.buffer.toString("base64");
            const mimeType = req.file.mimetype; // e.g., image/png
            const dataUri = `data:${mimeType};base64,${fileBase64}`;

        
        const cloudResult = await cloudinary.uploader.upload(dataUri, {
            folder: "products",
        });

        console.log("Cloudinary uploaded:", cloudResult.secure_url);
        console.log(req.file.buffer);
        

        const name = req.body.name?.trim() || "Unnamed Product";
        const description = req.body.description?.trim() || "";
        const price = req.body.price ? parseFloat(req.body.price) : 0;
        const stock = req.body.stock ? Math.floor(Number(req.body.stock)) : 0;

        const product = await Product.create({
            name,
            price,
            description,
            stock,
            image: cloudResult.secure_url,
            public_id: cloudResult.public_id,
        });

        return res.status(201).json({
            message: "Product created successfully",
            product,
        });
    } catch (err) {
        console.error("ERROR:", err, err.errors);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};



