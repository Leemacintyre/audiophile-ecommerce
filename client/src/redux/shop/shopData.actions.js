import { shopDataActionTypes } from "./shopData.types";

// export const getShopData = (shopData) => ({
//     type: shopDataActionTypes.GET_SHOP_DATA,
//     payload: shopData,
// });

export const fetchShopDataStart = (shopData) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_START,
    payload: shopData,
});

export const fetchShopDataSuccess = (shopData) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS,
    payload: shopData,
});

export const fetchShopDataFailure = (errorMessage) => ({
    type: shopDataActionTypes.FETCH_SHOP_DATA_FAILURE,
    payload: errorMessage,
});
