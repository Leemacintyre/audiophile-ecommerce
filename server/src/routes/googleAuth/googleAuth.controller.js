function googleCallback(req, res) {
    return console.log("google called us back");
}

function redirectToHome(req, res) {
    return res.redirect("http://localhost:3000");
}

module.exports = { googleCallback, redirectToHome };
