import { takeLatest, put, call } from "redux-saga/effects";
import { getAllProductItems } from "../../Hooks/axiosRequests";

import { productItemActionTypes } from "./productItem.types";
import {
    fetchProductItemFailure,
    fetchProductItemSuccess,
} from "./productItem.actions";

export function* fetchProductItemAsync() {
    yield console.log("fetchProductItemAsync");
    try {
        const data = yield call(getAllProductItems);
        yield console.log("fetchProductItemAsync-data", data);
        yield put(fetchProductItemSuccess(data));
    } catch (error) {
        yield put(fetchProductItemFailure(error.message));
    }
}

export function* fetchProductItemStart() {
    yield takeLatest(
        productItemActionTypes.FETCH_PRODUCT_ITEM_START,
        fetchProductItemAsync
    );
}
