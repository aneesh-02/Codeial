module.exports.profile = function(req,res)
{
    return res.render("user_profile", { title : "User"});
}

//render the sign up page
module.exports.signUp = function(req,res)
{
    return res.render("user_sign_up",
    {
        title: "COdial | Sign Up"
    })
}

//render the sign in page
module.exports.signIn = function(req,res)
{
    return res.render("user_sign_in",
    {
        title: "COdial | Sign In"
    })
}

// get the signup data
module.exports.create = function(req,res)
{
    // TODO
}


// signin and create the sesion for the user
module.exports.createSession = function(req,res)
{
    // TODO
}