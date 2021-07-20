const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function(err)
{
    if(err)
    {
        console.log("An error occured while running the server");
    }

    console.log("The app is running on port", port);
});