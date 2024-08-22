const { CLOUDINARY_API_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require("../config/serverConfig")

const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: CLOUDINARY_API_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

const uploadFile = async(filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath)
        console.log(result)
        return result
    } catch (error) {
        console.log("Cloudinary upload error", error.message)
    }
}

module.exports = uploadFile