// 1)
const express = require("express");
const router = express.Router();

// 3)
const usersController = require("../controllers/users_controller");
router.get("/profile", usersController.profile);

// 2)
module.exports = router;
