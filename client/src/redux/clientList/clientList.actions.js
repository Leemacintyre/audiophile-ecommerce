import { clientListActionTypes } from "./clientList.types";

export const fetchClientListStart = (clientList) => ({
    type: clientListActionTypes.FETCH_CLIENT_LIST_START,
    payload: clientList,
});

export const fetchClientListSuccess = (clientList) => ({
    type: clientListActionTypes.FETCH_CLIENT_LIST_SUCCESS,
    payload: clientList,
});

export const fetchClientListFailure = (errorMessage) => ({
    type: clientListActionTypes.FETCH_CLIENT_LIST_FAILURE,
    payload: errorMessage,
});
