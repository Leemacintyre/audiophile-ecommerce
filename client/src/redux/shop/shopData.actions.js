import { shopDataActionTypes } from "./shopData.types";

export const fetchShopDataStart = (shopData) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_START,
    payload: shopData,
});

export const fetchShopDataSuccess = (shopData) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS,
    payload: shopData,
});

export const fetchShopDataFailure = (errorMessage) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_FAILURE,
    payload: errorMessage,
});

export const fetchDeleteProductCategoryStart = (productId) => ({
    type: shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_START,
    payload: productId,
});

export const fetchDeleteProductCategorySuccess = (productId) => ({
    type: shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_FAILURE,
    payload: productId,
});

export const fetchDeleteProductCategoryFailure = (errorMessage) => ({
    type: shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_FAILURE,
    payload: errorMessage,
});

export const fetchAddNewShopCategoryStart = (newCategory) => ({
    type: shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_START,
    payload: newCategory,
});
export const fetchAddNewShopCategorySuccess = (newCategory) => ({
    type: shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_SUCCESS,
    payload: newCategory,
});
export const fetchAddNewShopCategoryFailure = (errorMessage) => ({
    type: shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_FAILURE,
    payload: errorMessage,
});
