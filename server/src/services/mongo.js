const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("mongoose is connected!");
});

async function mongoConnect() {
    try {
        await mongoose.connect(String(MONGO_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
    }
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
