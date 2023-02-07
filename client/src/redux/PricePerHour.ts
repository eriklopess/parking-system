/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Price = {
  price: number;
};

const store = createSlice({
  name: 'pricePerHour',

  initialState: 1000,

  reducers: {
    setPrice: (state: number, { payload }: PayloadAction<Price>) => {
      state = payload.price;
    },
  },
});

export default store;
export const { setPrice } = store.actions;
