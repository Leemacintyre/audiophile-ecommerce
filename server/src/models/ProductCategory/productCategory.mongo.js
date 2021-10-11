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
    },
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
