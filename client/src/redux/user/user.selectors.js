import { createSelector } from "reselect";

const currentUser = (state) => state;

export const selectCurrentUser = createSelector(
    [currentUser],
    (state) => state.currentUser.currentUser
);
