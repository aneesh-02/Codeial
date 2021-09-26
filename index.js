// 1) initialise express
const express = require("express");
const app = express();
const port = 8000;

//7) require mongoose in app
const db = require("./config/mongoose");

// 8) require cookie library
const cookieParser =  require("cookie-parser");
app.use(express.urlencoded()); // reading thru the post request
app.use(cookieParser()); //setting up the cookie parser

// 5) require layouts library 
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

//6) look for files in assets folder
app.use(express.static("./assets"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// 2) listen on port
app.listen(port, function(err)
{
    if(err)
    {
        console.log("An error occured while running the server");
    }

    console.log("The app is running on port", port);
});


//3) use express router 
app.use("/", require("./routes"));

//4) set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

