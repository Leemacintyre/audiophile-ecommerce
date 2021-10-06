import { productItemActionTypes } from "./productItem.types";

export const fetchProductItemStart = (productItem) => ({
    type: productItemActionTypes.FETCH_PRODUCT_ITEM_START,
    payload: productItem,
});

export const fetchProductItemSuccess = (productItem) => ({
    type: productItemActionTypes.FETCH_PRODUCT_ITEM_SUCCESS,
    payload: productItem,
});

export const fetchProductItemFailure = (errorMessage) => ({
    type: productItemActionTypes.FETCH_PRODUCT_ITEM_FAILURE,
    payload: errorMessage,
});
