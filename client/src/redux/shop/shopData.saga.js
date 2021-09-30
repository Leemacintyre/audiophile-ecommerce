import { takeEvery, put, call } from "redux-saga/effects";
import { getAllShopData } from "../../Hooks/axiosRequests";
import axios from "axios";

import { shopDataActionTypes } from "./shopData.types";
import { fetchShopDataFailure, fetchShopDataSuccess } from "./shopData.actions";

export function* fetchShopDataAsync() {
    yield console.log("i am fired");
// TODO: this is'nt working yet

            const { data } = getAllShopData();


        
        const responseData = call(data);

        yield put(fetchShopDataSuccess(responseData));
    } catch (error) {
        yield put(fetchShopDataFailure(error.message));
    }
}

export function* fetchShopDataStart() {
    yield takeEvery(
        shopDataActionTypes.FETCH_SHOP_DATA_START,
        fetchShopDataAsync
    );
}
