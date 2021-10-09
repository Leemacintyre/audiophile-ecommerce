import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getCurrentUser, signOutGoogle } from "../../Hooks/axiosRequests";

import { userActionTypes } from "./user.types";
import {
    fetchUserSuccess,
    fetchUserFailure,
    signOutSuccess,
    signOutFailure,
} from "./user.actions";

export function* fetchUserAsync() {
    yield console.log("getCurrentUser");
    try {
        const data = yield call(getCurrentUser);
        yield put(fetchUserSuccess(data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export function* signOutAsync() {
    yield console.log("signOut");
    try {
        const data = yield call(signOutGoogle);
        yield put(signOutSuccess(data));
    } catch (error) {
        yield signOutFailure(error.message);
    }
}

export function* fetchUserStart() {
    yield takeLatest(userActionTypes.FETCH_USER_START, fetchUserAsync);
}

export function* signOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOutAsync);
}
