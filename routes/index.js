// entry point to all the routes 
// express router module is used to sepearate my app route and cntroller
const express = require("express");
const router = express.Router();
console.log("router file loaded");

module.exports = router; 

const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);


