// entry point to all the routes 
// express router module is used to sepearate my app route and cntroller
// 1)
const express = require("express");
// 2)
const router = express.Router();
console.log("router file loaded");

// 4) 
const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);

// for any further routes acess from here
// router.use("/routerName". require("./routerFile"));
// 5)
router.use("/users",require("./users"));
router.use("/posts", require("./posts")); // works on localhost:8000/posts/posts

// 3)
module.exports = router; 