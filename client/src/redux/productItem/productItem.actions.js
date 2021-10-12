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

export const fetchCurrentItemIdStart = (currentItemId) => ({
    type: productItemActionTypes.FETCH_CURRENT_ITEM_ID_START,
    payload: currentItemId,
});

export const fetchCurrentItemIdSuccess = (currentItemId) => ({
    type: productItemActionTypes.FETCH_CURRENT_ITEM_ID_SUCCESS,
    payload: currentItemId,
});

export const fetchCurrentItemIdFailure = (errorMessage) => ({
    type: productItemActionTypes.FETCH_CURRENT_ITEM_ID_FAILURE,
    payload: errorMessage,
});

export const fetchCurrentTitleId = (currentTitleId) => ({
    type: productItemActionTypes.FETCH_CURRENT_ITEM_TITLE,
    payload: currentTitleId,
});
