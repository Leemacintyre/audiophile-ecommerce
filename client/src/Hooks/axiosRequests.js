import axios from "axios";

export const getAllShopData = async () => {
    const { data } = await axios.get("http://localhost:8000/v1/shopData");
    // const { data } = await axios.get(
    //     "https://the-dealer-portal.herokuapp.com/v1/shopData"
    // );
    console.log("axios", data);
    return data;
};
