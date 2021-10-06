import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/v1/";
// axios.defaults.baseURL = "https://the-dealer-portal.herokuapp.com/v1/";

export const getAllProductCategory = async () => {
    const { data } = await axios.post("products", {
        userId: "113577393364732277603",
    });
    console.log("axios-getAllShopCategory", data);
    return data;
};

export const getAllProductItems = async () => {
    const { data } = await axios.post("productItem", {
        userId: "113577393364732277603",
    });
    console.log("axios-getAllShopItems", data);
};
