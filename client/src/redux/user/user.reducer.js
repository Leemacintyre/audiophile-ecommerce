import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        case userActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};
