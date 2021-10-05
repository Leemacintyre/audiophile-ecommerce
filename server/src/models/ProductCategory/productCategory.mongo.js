const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
    userId: {
        type: String,
        trim: true,
        required: true,
    },
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
    // items: [
    //     {
    //         name: { type: String, trim: true, unique: true },
    //         imageUrl: { type: String, trim: true, unique: true },
    //         price: { type: Number, trim: true },
    //     },
    // ],
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
