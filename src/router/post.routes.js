const { Router } = require("express");
const postPhotoGuard = require("../guards/post-photo.guard");
const { postPhotoUpload } = require("../lib/file.service");
const postController = require("../controllers/post.controller");

const postRouter = Router();

postRouter.post("/create", postPhotoUpload.single("post_image"), postPhotoGuard, postController.CREATE);

module.exports = postRouter;