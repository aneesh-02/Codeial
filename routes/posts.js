// 1)
const express = require("express");
const router = express.Router();

// 3)
const postsController = require("../controllers/posts_controller");
router.get("/posts", postsController.posts);

// 2)
module.exports = router;