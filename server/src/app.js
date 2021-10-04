const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const api = require("./routes/api");
// const { authFlow } = require("./services/authFlow");

const app = express();

// app.use(helmet({ contentSecurityPolicy: false }));

// auth flow for social sign in (google)
authFlow(app);

app.use(
    cors({
        origin: "http://localhost:3000",
        origin: "https://the-dealer-portal.herokuapp.com/",
    })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
