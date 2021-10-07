import { createSelector } from "reselect";

const selectItem = (state) => state.productItem.productItem;

export const selectProductItem = createSelector(
    [selectItem],
    (selectItem) => selectItem
);
