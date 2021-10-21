const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const passport = require("passport");

const api = require("./routes/api");
const { authFlow } = require("./services/authFlow");

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY_1],
    })
);
app.use(passport.initialize());
app.use(passport.session());

// auth flow for social sign in (google)
authFlow(app);

// app.use(helmet({ contentSecurityPolicy: false }));

app.use(
    cors({
        origin: [
            "https://the-dealer-portal.herokuapp.com/",
            "http://localhost:3000",
        ],
    })
);

app.use(express.json());
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
