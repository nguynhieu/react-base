import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.shop || initialState;

export const selectShop = createSelector(
  [selectDomain],
  (shopState) => shopState
);
