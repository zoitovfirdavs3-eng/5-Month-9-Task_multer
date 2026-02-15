const app = require("converter-mb");
const path = require("node:path");
const { globalError, ClientError } = require("shokhijakhon-error-handler");
const { v4 } = require("uuid");
module.exports = (req, res, next) => {
    const allowedFormats = [".png", ".jpg", ".jpeg"];
    const allowedFileSize = 5;
    try{
        if(!req.file) return next();
        let postImage = req.file;
        let currentImageExt = path.extname(postImage.originalname);
        if(!allowedFormats.includes(currentImageExt)) throw new ClientError('Invalid image format', 415);
        const currentFileSize = app.byte(postImage.size);
        if(allowedFileSize < currentFileSize) throw new ClientError('Image size is too large', 413);
        req.filename = v4() + postImage.originalname;
        next();
    }catch(err){
        return globalError
    }
}