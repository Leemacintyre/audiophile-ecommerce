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
        const userId = req.body.userId;
        return await ProductCategory.find({ userId: userId });
    } catch (error) {
        console.log(`could not get shop data ${error}`);
    }
}

async function addNewProductItem(req, res) {
    //     //  name: req.body.name,
    //     //                     imageUrl: req.body.imageUrl,
    //     //                     price: req.body.price,
    try {
        //         return ProductCategory.findByIdAndUpdate(
        //             { _id: "6153efbb03c8b54f4e7216de" },
        //             {
        //                 $addToSet: {
        //                     items: {
        //                         name: req.body.name,
        //                         imageUrl: req.body.imageUrl,
        //                         price: req.body.price,
        //                     },
        //                 },
        //             }
        //         );
    } catch (error) {
        //         console.log(`unable to add new product item ${error}`);
    }
}

module.exports = { createNewProduct, getAllProducts, addNewProductItem };
