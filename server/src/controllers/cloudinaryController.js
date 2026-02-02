const cloudinary = require('../config/cloudinaryConfig')

exports.UploadInCloudinary = (req,res) =>{
    const url = cloudinary.url('cld-sample-4');
    if(url){
        res.json({
                status : 'success',
                image: url
        });
    }
}