function googleCallback(req, res) {
    return console.log("google called us back");
}

function redirectToHome(req, res) {
    if (process.env.NODE_ENV === "production") {
        return res.redirect("https://localhost:8000/");
    }
    return res.redirect("http://localhost:3000");
}

https: module.exports = { googleCallback, redirectToHome };
