import { createSelector } from "reselect";

const selectShop = (state) => state.shopData;

export const selectShopData = createSelector(
    [selectShop],
    (shopData) => shopData.shopData
);

// export const selectShopDataId = createSelector(
//     [selectShop],
//     (shopData) => shopData.shopData
// );

// export const selectCurrentItemId = createSelector(
//     [selectShop],
//     (shopData) => shopData
// );

// export const selectCurrentTitleId = createSelector(
//     [selectShop],
//     (shopData) => shopData.currentItemId
// );
