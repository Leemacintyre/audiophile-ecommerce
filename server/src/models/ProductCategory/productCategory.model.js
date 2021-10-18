const ProductCategory = require("./productCategory.mongo");

async function createNewProduct(req, res) {
    try {
        const newProduct = new ProductCategory({
            product: req.body.product,
            routeName: req.body.routeName,
            userId: req.body.userId,
        });

        return await newProduct.save();
    } catch (error) {
        console.log(`could not save new product ${error}`);
    }
}

async function getAllProducts(req, res) {
    try {
        // const userId = req.body.userId;
        const userId = req.user.id;

        return await ProductCategory.find({ userId: userId });
    } catch (error) {
        console.log(`could not get shop data ${error}`);
    }
}

async function deleteProductCategory(req, res) {
    try {
        return await ProductCategory.findByIdAndDelete({
            _id: req.body.itemToDelete,
        });
    } catch (error) {
        console.log(`Could not delete product ${error}`);
    }
}

module.exports = { createNewProduct, getAllProducts, deleteProductCategory };
