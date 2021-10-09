import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { productItemReducer } from "./productItem/productItem.reducer";
import { shopReducer } from "./shop/shopData.reducer";
import { userReducer } from "./user/user.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["currentUser"],
};

const rootReducer = combineReducers({
    productItem: productItemReducer,
    shopData: shopReducer,
    currentUser: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
