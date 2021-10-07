import { productItemActionTypes } from "./productItem.types";

const INITIAL_STATE = {
    productItem: null,
    error: null,
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
        default:
            return state;
    }
};
