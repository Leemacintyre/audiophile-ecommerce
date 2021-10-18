import { shopDataActionTypes } from "./shopData.types";

const INITIAL_STATE = {
    shopData: null,
    error: null,
    currentProductId: 0,
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
        default:
            return state;
    }
};
