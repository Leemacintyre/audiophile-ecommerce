const mongoose = require("mongoose");

const shopDataSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    routeName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    items: [
        {
            name: { type: String, trim: true },
            imageUrl: { type: String, trim: true },
            price: { type: Number, trim: true },
        },
    ],
});

module.exports = mongoose.model("ShopData", shopDataSchema);
