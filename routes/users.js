// 1)
const express = require("express");
const router = express.Router();

// 3)
const usersController = require("../controllers/users_controller");
router.get("/profile", usersController.profile);

// 4) 
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
router.get("/create", userController.create);

// 2)
module.exports = router;
