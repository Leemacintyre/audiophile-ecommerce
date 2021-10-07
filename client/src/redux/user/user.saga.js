import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getCurrentUser } from "../../Hooks/axiosRequests";

import { userActionTypes } from "./user.types";
import { fetchUserSuccess, fetchUserFailure } from "./user.actions";

export function* fetchUserAsync() {
    yield console.log("getCurrentUser");
    try {
        const data = yield call(getCurrentUser);
        yield put(fetchUserSuccess(data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export function* fetchUserStart() {
    yield takeLatest(userActionTypes.FETCH_USER_START, fetchUserAsync);
}
