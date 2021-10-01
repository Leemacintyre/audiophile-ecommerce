import { shopDataActionTypes } from "./shopData.types";

const INITIAL_STATE = {
    shopData: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS:
            return {
                ...state,
                shopData: action.payload,
            };
        default:
            return state;
    }
};
