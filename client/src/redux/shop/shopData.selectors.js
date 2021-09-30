import { createSelector } from "reselect";

const selectShop = (state) => state.shopData;

export const selectShopData = createSelector(
    [selectShop],
    (shopData) => shopData.shopData
);
