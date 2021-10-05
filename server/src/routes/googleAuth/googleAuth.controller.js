function googleCallback(req, res) {
    return console.log("google called us back");
}

function redirectToHome(req, res) {
    if (process.env.NODE_ENV === "production") {
        return res.redirect("https://the-dealer-portal.herokuapp.com/");
    }
    return res.redirect("http://localhost:3000");
}

module.exports = { googleCallback, redirectToHome };
