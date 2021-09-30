import { combineReducers } from "redux";
import { shopReducer } from "./shop/shopData.reducer";

export default combineReducers({
    shopData: shopReducer,
});
