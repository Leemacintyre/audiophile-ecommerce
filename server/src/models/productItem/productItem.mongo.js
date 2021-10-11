const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    ProductCategoryId: {
        type: String,
        trim: true,
    },
    userId: {
        type: String,
        trim: true,
    },
    itemName: {
        type: String,
        trim: true,
        // unique: true,
    },
    imageUrl: {
        type: String,
        trim: true,
        // unique: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    quantity: {
        type: Number,
        trim: true,
    },
});

module.exports = mongoose.model("ProductItem", itemSchema);
