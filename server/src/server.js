const http = require("https");
const fs = require("fs");

require("dotenv").config();

const app = require("./app");

const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
// {
//     key: fs.readFileSync("key.pem"),
//     cert: fs.readFileSync("cert.pem"),
// },

async function startServer() {
    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();
