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
        call(signOutStart),
        call(fetchShopDataStart),
        call(fetchProductItemStart),
        call(fetchUserStart),
        call(fetchCurrentTitleIdStart),
        call(fetchDeleteProductCategoryStart),
        call(fetchAddNewProductItemStart),
        call(fetchUpdateProductItemStart),
        call(fetchAddNewShopCategoryStart),
    ]);
}
