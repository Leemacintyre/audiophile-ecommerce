import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/v1/";
// axios.defaults.baseURL = "https://the-dealer-portal.herokuapp.com/v1/";

export const getCurrentUser = async () => {
    try {
        const { data } = await axios.get("currentUser", {
            withCredentials: true,
        });
        console.log("getCurrentUser", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

// TODO check if this is needed
export const signOutGoogle = async () => {
    try {
        const data = await axios.get("google/logout", {
            withCredentials: true,
        });
        console.log("getCurrentUser", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

// Product category section

export const getAllProductCategory = async () => {
    const { data } = await axios.get("products", {
        // userId: "113577393364732277603",
    });
    console.log("axios-getAllShopCategory", data);
    return data;
};

export const deleteProductCategory = async (currentProductId) => {
    const idToBeDeleted = await currentProductId;
    try {
        axios.delete("products/deleteCategoryItem", {
            data: {
                itemToDelete: currentProductId,
            },
        });
        return `deleted ${idToBeDeleted}`;
    } catch (error) {
        console.log(error);
    }
};

// Product item section

export const getAllProductItems = async () => {
    const { data } = await axios.get("productItem", {
        // userId: "113577393364732277603",
    });
    console.log("axios-getAllShopItems", data);
    return data;
};

export const addNewProductItem = async ({
    userId,
    ProductCategoryId,
    itemName,
    imageUrl,
    quantity,
    price,
}) => {
    console.log("axios-addNewProductItem");
    axios.post("productItem/createProductItem", {
        userId: userId,
        ProductCategoryId: ProductCategoryId,
        itemName: itemName,
        imageUrl: imageUrl,
        quantity: quantity,
        price: parseFloat(price),
    });
    return `new product created ${itemName}`;
};

export const updateProductItem = async ({
    userId,
    ProductCategoryId,
    itemName,
    imageUrl,
    quantity,
    price,
}) => {
    console.log(
        "axios-updateProductItem",
        userId,
        ProductCategoryId,
        itemName,
        imageUrl,
        quantity,
        price
    );
    axios.put("productItem/updateProductItem", {
        userId: userId,
        ProductCategoryId: ProductCategoryId,
        itemName: itemName,
        imageUrl: imageUrl,
        quantity: quantity,
        price: parseFloat(price),
    });
    return `updated product item ${itemName}`;
};

export const deleteProductItem = async (currentItemId) => {
    const idToBeDeleted = await currentItemId;
    try {
        axios.delete("productItem/deleteProductItem", {
            data: {
                itemToDelete: currentItemId,
                // itemToDelete: currentItemId.currentItemId,
            },
        });
        return `deleted ${idToBeDeleted}`;
    } catch (error) {
        console.log(error);
    }
};
