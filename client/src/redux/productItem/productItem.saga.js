import { takeLatest, put, call } from "redux-saga/effects";
import {
    deleteProductItem,
    getAllProductItems,
} from "../../Hooks/axiosRequests";

import { productItemActionTypes } from "./productItem.types";
import {
    fetchProductItemFailure,
    fetchProductItemSuccess,
    fetchCurrentItemIdSuccess,
    fetchCurrentItemIdFailure,
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

export function* fetchCurrentItemIdAsync(id) {
    yield console.log("fetchCurrentTitleIdAsync", id.payload);
    try {
        const data = yield call(deleteProductItem, id.payload);
        yield put(fetchCurrentItemIdSuccess(data));
        const newProductData = yield call(getAllProductItems);
        yield put(fetchProductItemSuccess(newProductData));
    } catch (error) {
        yield put(fetchCurrentItemIdFailure(error));
    }
}

export function* fetchProductItemStart() {
    yield takeLatest(
        productItemActionTypes.FETCH_PRODUCT_ITEM_START,
        fetchProductItemAsync
    );
}

export function* fetchCurrentTitleIdStart() {
    yield takeLatest(
        productItemActionTypes.FETCH_CURRENT_ITEM_ID_START,
        fetchCurrentItemIdAsync
    );
}
