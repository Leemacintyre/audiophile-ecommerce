import { createSelector } from "reselect";

const selectItem = (state) => state;

export const selectProductItem = createSelector(
    [selectItem],
    (selectItem) => selectItem
);
