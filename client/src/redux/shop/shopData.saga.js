import { takeLatest, put, call } from "redux-saga/effects";
import {
    addNewCategoryTitle,
    deleteProductCategory,
    getAllProductCategory,
} from "../../Hooks/axiosRequests";

import { shopDataActionTypes } from "./shopData.types";
import {
    fetchShopDataFailure,
    fetchShopDataSuccess,
    fetchDeleteProductCategorySuccess,
    fetchDeleteProductCategoryFailure,
    fetchAddNewShopCategorySuccess,
    fetchAddNewShopCategoryFailure,
} from "./shopData.actions";

export function* fetchShopDataAsync() {
    yield console.log("fetchShopDataAsync");
    try {
        const data = yield call(getAllProductCategory);
        yield put(fetchShopDataSuccess(data));
    } catch (error) {
        yield put(fetchShopDataFailure(error.message));
    }
}

export function* addNewProductCategoryAsync(newProduct) {
    yield console.log("addNewProductCategoryAsync");
    try {
        const data = yield call(addNewCategoryTitle, newProduct.payload);
        yield put(fetchAddNewShopCategorySuccess(data));
        const newProductCategory = yield call(getAllProductCategory);
        yield put(fetchShopDataSuccess(newProductCategory));
    } catch (error) {
        yield put(fetchAddNewShopCategoryFailure(error.message));
    }
}

export function* deleteProductCategoryAsync(id) {
    yield console.log("deleteProductCategoryAsync");
    try {
        const data = yield call(deleteProductCategory, id.payload);
        yield put(fetchDeleteProductCategorySuccess(data));
        const newProductCategory = yield call(getAllProductCategory);
        yield put(fetchShopDataSuccess(newProductCategory));
    } catch (error) {
        yield put(fetchDeleteProductCategoryFailure(error.message));
    }
}

export function* fetchShopDataStart() {
    yield takeLatest(
        shopDataActionTypes.FETCH_SHOP_DATA_START,
        fetchShopDataAsync
    );
}

export function* fetchAddNewShopCategoryStart() {
    yield takeLatest(
        shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_START,
        addNewProductCategoryAsync
    );
}

export function* fetchDeleteProductCategoryStart() {
    yield takeLatest(
        shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_START,
        deleteProductCategoryAsync
    );
}
