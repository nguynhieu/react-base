import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState } from "./types";

// The initial state of the Shop container
export const initialState: ContainerState = {};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: shopActions, reducer, name: sliceKey } = shopSlice;
