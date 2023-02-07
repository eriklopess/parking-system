import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../interfaces/Car';

const store = createSlice({
  name: 'car',

  initialState: [{
    model: 'Civic',
    brand: 'Honda',
    plate: 'ABC-1234',
    color: 'Black',
  }],

  reducers: {
    addCar: (state: Car[], { payload }: PayloadAction<Car>) => {
      state.push(payload);
    },
    removeCar: (state: Car[], { payload }: PayloadAction<string>) => {
      const index = state.indexOf(state.find((car) => car.plate === payload)!);
      state.splice(index, 1);
    },
  },
});

export default store;
export const { addCar, removeCar } = store.actions;
