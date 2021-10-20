import { shopDataActionTypes } from "./shopData.types";

const INITIAL_STATE = {
    shopData: null,
    error: null,
    currentProductId: null,
    newProductCategory: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS:
            return {
                ...state,
                shopData: action.payload,
            };
        case shopDataActionTypes.FETCH_SHOP_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                currentProductId: action.payload,
            };
        case shopDataActionTypes.FETCH_DELETE_PRODUCT_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_SUCCESS:
            return {
                ...state,
                newProductCategory: action.payload,
            };
        case shopDataActionTypes.FETCH_ADD_NEW_SHOP_CATEGORY_FAILURE:
            return {
                ...state,
                newProductCategory: action.payload,
            };
        default:
            return state;
    }
};
