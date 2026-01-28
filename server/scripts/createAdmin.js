require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../src/models/usersModel");

    (async () => {
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
        await User.create({
            full_name: "Super Admin",
            email: "yourmaster@email.com",
            password: hashedPassword,
            role: "admin"
        });
            console.log("Admin created!");
            process.exit();
    })();
