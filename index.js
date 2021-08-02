const express = require("express");
const app = express();
const port = 8000;

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

// look for files in assets folder
app.use(express.static("./assets"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.listen(port, function(err)
{
    if(err)
    {
        console.log("An error occured while running the server");
    }

    console.log("The app is running on port", port);
});


// use express router 
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");