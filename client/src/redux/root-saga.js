import { all, call } from "redux-saga/effects";

import { fetchShopDataStart } from "./shop/shopData.saga";
import { fetchProductItemStart } from "./productItem/productItem.saga";
import { fetchUserStart } from "./user/user.saga";

export function* rootSaga() {
    yield all([
        call(fetchShopDataStart),
        call(fetchProductItemStart),
        call(fetchUserStart),
    ]);
}
