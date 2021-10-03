function checkLoggedIn(req, res, next) {
    const isLoggedIn = req.isAuthenticated() && req.user;
    // console.log(req.user);
    if (!isLoggedIn) {
        return res.status(401).json({
            error: "You must log in",
        });
    }
    next();
}

module.exports = { checkLoggedIn };
