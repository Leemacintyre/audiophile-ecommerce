import axios from "axios";

export const getAllShopData = async () => {
    const { data } = await axios.get("https://localhost:8000/v1/shopData");
    console.log("axios", data);
    return data;
};
