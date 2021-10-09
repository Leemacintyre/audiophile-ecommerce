import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/v1/";
// axios.defaults.baseURL = "https://the-dealer-portal.herokuapp.com/v1/";

export const getAllProductCategory = async () => {
    const { data } = await axios.get("products", {
        // userId: "113577393364732277603",
    });
    console.log("axios-getAllShopCategory", data);
    return data;
};

export const getAllProductItems = async () => {
    const { data } = await axios.get("productItem", {
        // userId: "113577393364732277603",
    });
    console.log("axios-getAllShopItems", data);
    return data;
};

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

// http://localhost:8000/v1/google/logout

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
