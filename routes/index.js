// entry point to all the routes 
// express router module is used to sepearate my app route and cntroller
const express = require("express");
const router = express.Router();
console.log("router file loaded");

const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);
router.use("/users",require("./users"));

// for any further routes acess from here
// router.use("/routerName". require("./routerFile"));

router.use("/posts", require("./posts")); // works on localhost:8000/posts/posts


module.exports = router; 

