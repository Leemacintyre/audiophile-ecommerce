const ProductItem = require("./productItem.mongo");

async function createNewItem(req, res) {
    console.log(req.body);
    try {
        const newItem = new ProductItem({
            ProductCategoryId: req.body.ProductCategoryId,
            userId: req.body.userId,
            itemName: req.body.itemName,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
        });
        console.log(newItem);
        return await newItem.save();
    } catch (error) {
        console.log(`could not save new item ${error}`);
    }
}

async function updateProductItem(req, res) {
    try {
        const updatedItem = {
            ProductCategoryId: req.body.ProductCategoryId,
            userId: req.body.userId,
            itemName: req.body.itemName,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
        };
        console.log(updatedItem);
        return await ProductItem.findOneAndUpdate(
            { _id: req.body.itemToUpdate },
            updatedItem
        );
    } catch (error) {
        console.log(`Could not update item ${error}`);
    }
}

async function deleteProductItem(req, res) {
    try {
        return await ProductItem.findByIdAndDelete({
            _id: req.body.itemToDelete,
        });
    } catch (error) {
        console.log(`could not delete item ${error}`);
    }
}

async function getAllProductItems(req, res) {
    try {
        const userId = req.user.id;
        return await ProductItem.find({ userId: userId });
    } catch (error) {
        console.log(`could not get shop data ${error}`);
    }
}

module.exports = {
    createNewItem,
    getAllProductItems,
    updateProductItem,
    deleteProductItem,
};
