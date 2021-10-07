import { userActionTypes } from "./user.types";

export const fetchUserStart = (currentUser) => ({
    type: userActionTypes.FETCH_USER_START,
    payload: currentUser,
});

export const fetchUserSuccess = (currentUser) => ({
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload: currentUser,
});

export const fetchUserFailure = (errorMessage) => ({
    type: userActionTypes.FETCH_USER_FAILURE,
    payload: errorMessage,
});
