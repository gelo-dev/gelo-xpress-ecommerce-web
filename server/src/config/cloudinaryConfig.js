const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "dl1oaa2td",
    // secure:  true
})


module.exports = cloudinary