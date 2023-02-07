/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../interfaces/Car';
import { Lot } from '../interfaces/Lot';

const store = createSlice({
  name: 'lots',
  initialState: [

  ],
  reducers: {
    addLot: (state: Lot[]) => {
      if (state.length <= 0) {
        state.push({
          id: 1,
          number: 1,
          isOccupied: false,
        });
        return;
      }
      const lastLot = state.at(-1)!;
      const newLot = {
        id: lastLot.id + 1,
        number: lastLot.number + 1,
        isOccupied: false,
        isDisabled: false,
      };
      state.push(newLot);
    },
    occupyLot: (state: Lot[], { payload }: PayloadAction<{ number: number, car: Car }>) => {
      const index = state.indexOf(state.find((lot) => lot.number === payload.number)!);
      state[index].isOccupied = true;
      state[index].car = payload.car;
    },
    freeLot: (state: Lot[], { payload }: PayloadAction<number>) => {
      const index = state.indexOf(state.find((lot) => lot.number === payload)!);
      state[index].isOccupied = false;
      state[index].car = undefined;
    },
    removeLot: (state: Lot[], { payload }: PayloadAction<number>) => {
      const index = state.indexOf(state.find((lot) => lot.number === payload)!);
      state.splice(index, 1);
    },
  },
});

export default store;
export const {
  addLot, occupyLot, freeLot, removeLot,
} = store.actions;
