const { globalError } = require("shokhijakhon-error-handler");
const postValidator = require("../utils/validators/post.validator");
const PostModel = require("../models/Post.model");

module.exports = {
    async CREATE(req, res) {
        try{
            let newPost = req.body;
            await postValidator.validateAsync(newPost, {abortEarly: false});
            await PostModel.create({...newPost, post_image: req.filename});
            return res.status(201).json({message: "Post successfully created", status: 201});
        }catch(err){
            return globalError(err, res);
        }
    }
}