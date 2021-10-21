const mongoose = require("mongoose");

const clientListSchema = new mongoose.Schema({
    userId: {
        type: String,
        trim: true,
    },
    fName: {
        type: String,
        trim: true,
    },
    lName: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model("ClientList", clientListSchema);
