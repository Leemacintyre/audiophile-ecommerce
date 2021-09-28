const { find } = require("./shopData.mongo");
const ShopData = require("./shopData.mongo");

async function createNewProduct(req, res) {
    const product = req.body.product;
    const routeName = req.body.routeName;
    const items = req.body.items;

    try {
        const newProduct = new ShopData({
            product: req.body.product,
            routeName: req.body.routeName,
            items: req.body.items,
        });
        // checkExistingProducts(product, routeName, items);
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

// async function checkExistingProducts(product, routeName, items) {
//     try {
//         const matchingProducts = await ShopData.find({
//             product: product,
//             routeName: routeName,
//         });
//         if (matchingProducts) {
//             console.log("found products");
//             const itemData = await ShopData.find(routeName);
//             console.log(itemData);
//         } else {
//             console.log("no products");
//         }
//     } catch (error) {
//         console.log(`unable to check for existing products ${error}`);
//     }
// }

module.exports = { createNewProduct, getAllShopData };
