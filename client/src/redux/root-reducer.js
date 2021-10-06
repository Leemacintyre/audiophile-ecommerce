import { combineReducers } from "redux";
import { productItemReducer } from "./productItem/productItem.reducer";
import { shopReducer } from "./shop/shopData.reducer";

export default combineReducers({
    productItem: productItemReducer,
    shopData: shopReducer,
});
