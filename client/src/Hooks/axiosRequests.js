import axios from "axios";

export const getAllShopData = async () => {
    const response = await axios.get("http://localhost:8000/v1/shopData");
    return response;
};
