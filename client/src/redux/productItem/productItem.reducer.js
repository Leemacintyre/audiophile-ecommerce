import { productItemActionTypes } from "./productItem.types";

const INITIAL_STATE = {
    productItem: null,
    error: null,
    currentItemId: null,
    newProductItem: null,
    updateProductItem: null,
};

export const productItemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productItemActionTypes.FETCH_PRODUCT_ITEM_SUCCESS:
            return {
                ...state,
                productItem: action.payload,
            };
        case productItemActionTypes.FETCH_PRODUCT_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case productItemActionTypes.FETCH_CURRENT_ITEM_ID_SUCCESS:
            return {
                ...state,
                currentItemId: action.payload,
            };
        case productItemActionTypes.FETCH_CURRENT_ITEM_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case productItemActionTypes.FETCH_ADD_NEW_PRODUCT_ITEM_SUCCESS:
            return {
                ...state,
                newProductItem: action.payload,
            };
        case productItemActionTypes.FETCH_UPDATE_PRODUCT_ITEM_SUCCESS:
            return {
                ...state,
                updateProductItem: action.payload,
            };
        case productItemActionTypes.FETCH_UPDATE_PRODUCT_ITEM_FAILURE:
            return {
                ...state,
                updateProductItem: action.payload,
            };
        default:
            return state;
    }
};
