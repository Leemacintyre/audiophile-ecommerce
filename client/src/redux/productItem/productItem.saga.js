import { takeLatest, put, call } from "redux-saga/effects";
import {
    addNewProductItem,
    deleteProductItem,
    getAllProductItems,
    updateProductItem,
} from "../../Hooks/axiosRequests";

import { productItemActionTypes } from "./productItem.types";
import {
    fetchProductItemFailure,
    fetchProductItemSuccess,
    fetchCurrentItemIdSuccess,
    fetchCurrentItemIdFailure,
    fetchAddNewProductItemFailure,
    fetchAddNewProductItemSuccess,
    fetchUpdateProductItemSuccess,
    fetchUpdateProductItemFailure,
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
    yield console.log("fetchCurrentTitleIdAsync");
    try {
        const data = yield call(deleteProductItem, id.payload);
        yield put(fetchCurrentItemIdSuccess(data));
        const newProductData = yield call(getAllProductItems);
        yield put(fetchProductItemSuccess(newProductData));
    } catch (error) {
        yield put(fetchCurrentItemIdFailure(error.message));
    }
}

export function* fetchAddNewProductItemAsync(newItem) {
    yield console.log("fetchAddNewProductItemAsync", newItem);
    try {
        const data = yield call(addNewProductItem, newItem);
        yield put(fetchAddNewProductItemSuccess(data));
        const newProductData = yield call(getAllProductItems);
        yield put(fetchCurrentItemIdSuccess(newProductData));
    } catch (error) {
        yield put(fetchAddNewProductItemFailure(error.message));
    }
}

export function* fetchUpdateProductItemAsync(newItem) {
    yield console.log("fetchUpdateProductItemAsync", newItem);
    try {
        const data = yield call(updateProductItem, newItem);
        yield put(fetchUpdateProductItemSuccess(data));
        const updatedProductItems = yield call(getAllProductItems);
        yield put(fetchCurrentItemIdSuccess(updatedProductItems));
    } catch (error) {
        yield put(fetchUpdateProductItemFailure(error.message));
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

export function* fetchAddNewProductItemStart() {
    yield takeLatest(
        productItemActionTypes.FETCH_ADD_NEW_PRODUCT_ITEM_START,
        fetchAddNewProductItemAsync
    );
}

export function* fetchUpdateProductItemStart() {
    yield takeLatest(
        productItemActionTypes.FETCH_UPDATE_PRODUCT_ITEM_START,
        fetchUpdateProductItemAsync
    );
}
