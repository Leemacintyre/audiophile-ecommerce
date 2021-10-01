import { takeLatest, put, call } from "redux-saga/effects";
import { getAllShopData } from "../../Hooks/axiosRequests";

import { shopDataActionTypes } from "./shopData.types";
import { fetchShopDataFailure, fetchShopDataSuccess } from "./shopData.actions";

export function* fetchShopDataAsync() {
    yield console.log("i am fired");
    try {
        const data = yield call(getAllShopData);
        yield put(fetchShopDataSuccess(data));
    } catch (error) {
        yield put(fetchShopDataFailure(error.message));
    }
}

export function* fetchShopDataStart() {
    yield takeLatest(
        shopDataActionTypes.FETCH_SHOP_DATA_START,
        fetchShopDataAsync
    );
}
