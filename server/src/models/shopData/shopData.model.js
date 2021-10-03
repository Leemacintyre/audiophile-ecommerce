const ShopData = require("./shopData.mongo");

async function createNewProduct(req, res) {
    try {
        const newProduct = new ShopData({
            product: req.body.product,
            routeName: req.body.routeName,
            items: req.body.items,
        });

        return await newProduct.save();
    } catch (error) {
        console.log(`could not save new product ${error}`);
    }
}

async function getAllShopData(req, res) {
    try {
        return await ShopData.find();
    } catch (error) {
        console.log(`could not get shop data ${error}`);
    }
}

async function addNewProductItem(req, res) {
    //  name: req.body.name,
    //                     imageUrl: req.body.imageUrl,
    //                     price: req.body.price,
    try {
        return ShopData.findByIdAndUpdate(
            { _id: "6153efbb03c8b54f4e7216de" },
            {
                $addToSet: {
                    items: {
                        name: req.body.name,
                        imageUrl: req.body.imageUrl,
                        price: req.body.price,
                    },
                },
            }
        );
    } catch (error) {
        console.log(`unable to add new product item ${error}`);
    }
}

module.exports = { createNewProduct, getAllShopData, addNewProductItem };
