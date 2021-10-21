import { all, call } from "redux-saga/effects";

import {
    fetchShopDataStart,
    fetchDeleteProductCategoryStart,
    fetchAddNewShopCategoryStart,
} from "./shop/shopData.saga";
import {
    fetchProductItemStart,
    fetchCurrentTitleIdStart,
    fetchAddNewProductItemStart,
    fetchUpdateProductItemStart,
} from "./productItem/productItem.saga";
import { fetchUserStart, signOutStart } from "./user/user.saga";

export function* rootSaga() {
    yield all([
        // USER
        call(signOutStart),
        call(fetchUserStart),
        // SHOP DATA
        call(fetchShopDataStart),
        call(fetchCurrentTitleIdStart),
        call(fetchAddNewShopCategoryStart),
        //  SHOP PRODUCTS
        call(fetchDeleteProductCategoryStart),
        call(fetchProductItemStart),
        call(fetchAddNewProductItemStart),
        call(fetchUpdateProductItemStart),
        // CLIENT LIST
    ]);
}
