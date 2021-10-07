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
    return data;
};

// export const getCurrentUser = async () => {
//     const { data } = await axios.post(
//         "currentUser",

//         { withCredentials: true, _id: "113577393364732277603" }
//     );
//     console.log("axios-getAllShopItems", data);
//     return data;
// };

export const getCurrentUser = async () => {
    // const data = await axios.post("currentUser");
    try {
        const data = await axios.get("currentuser");
    } catch (error) {
        console.log(error);
    }
    // console.log("getCurrentUser", data);
    // return data;
};
