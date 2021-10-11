import { shopDataActionTypes } from "./shopData.types";

const INITIAL_STATE = {
    shopData: null,
    error: null,
    currentItemId: undefined,
    currentTitleId: undefined,
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
        case shopDataActionTypes.FETCH_CURRENT_ITEM_ID:
            return {
                ...state,
                currentItemId: action.payload,
            };
        case shopDataActionTypes.FETCH_CURRENT_ITEM_TITLE:
            return {
                ...state,
                currentTitleId: action.payload,
            };
        default:
            return state;
    }
};
