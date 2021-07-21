// module.exports.actionName = function(req,res){}

module.exports.home = function(req,res)
{
    // return res.end("<h1>EXPRESS IS UP FOR CODEIAL </h1>");

    return res.render("home" , { title : "Home"});
} 