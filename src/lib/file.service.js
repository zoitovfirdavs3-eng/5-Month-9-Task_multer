const path = require("node:path")
const multer = require("multer");
const { v4 } = require("uuid");

const postStorage = multer.diskStorage({
    destination: function(_, _, callback){
        return callback(null, path.join(process.cwd(), "uploads", "postPhotos"))
    },
    filename: function(req, file, callback){
        let filename = v4() + file.originalname
        callback(null, filename)
    }
});

const postPhotoUpload = multer({
    storage: postStorage
});

module.exports = {postStorage, postPhotoUpload};