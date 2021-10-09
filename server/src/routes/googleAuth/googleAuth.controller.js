function googleCallback(req, res) {
    return console.log("google called us back");
}

function redirectToHome(req, res) {
    // console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
        return res.redirect("https://the-dealer-portal.herokuapp.com/");
    }
    return res.redirect("http://localhost:3000");
}

function redirectToLogin(req, res) {
    // console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
        return res.redirect("https://the-dealer-portal.herokuapp.com/Login");
    }
    return res.redirect("http://localhost:3000/login");
}

module.exports = { googleCallback, redirectToHome, redirectToLogin };
