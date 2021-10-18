const {
    createNewProduct,
    getAllProducts,
    deleteProductCategory,
} = require("../../models/productCategory/productCategory.model");

async function httpGetAllProducts(req, res) {
    try {
        return res.status(200).json(await getAllProducts(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllProducts" });
    }
}

async function httpCreateProduct(req, res) {
    try {
        return res.status(201).json(await createNewProduct(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "createNewProduct" });
    }
}

async function httpDeleteCategoryItem(req, res) {
    try {
        console.log("test");
        return res.status(204).json(await deleteProductCategory(req));
    } catch (error) {
        console.log("test2");
        return res
            .status(400)
            .json({ error: error, location: "httpDeleteCategoryItem" });
    }
}

module.exports = {
    httpGetAllProducts,
    httpCreateProduct,
    httpDeleteCategoryItem,
};
