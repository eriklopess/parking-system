/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../interfaces/Car';

type OrderStatus = 'pending' | 'accepted' | 'rejected';

export type Order = {
  id: number;
  price: number;
  entry: Date;
  exit: Date;
  status: OrderStatus;
  value: number;
  lot: number;
  car: Car
};

const store = createSlice({
  name: 'orders',

  initialState: [],

  reducers: {
    addOrder: (state: Order[], { payload }: PayloadAction<{ lot: number, car: Car }>) => {
      const dateNow = new Date();
      state.push({
        id: state.length + 1,
        price: 0,
        entry: dateNow,
        exit: dateNow,
        status: 'pending',
        value: 0,
        lot: payload.lot,
        car: payload.car,
      });
    },
    acceptOrder: (state: Order[], { payload }: PayloadAction<number>) => {
      const index = state.indexOf(state.find((order) => order.id === payload)!);
      state[index].status = 'accepted';
    },
    rejectOrder: (state: Order[], { payload }: PayloadAction<number>) => {
      const index = state.indexOf(state.find((order) => order.id === payload)!);
      state[index].status = 'rejected';
    },
  },
});

export default store;
export const { addOrder, acceptOrder, rejectOrder } = store.actions;
