import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import carReducer from './Car.store';
import lotsReducer from './Lots.store';
import ordersReducer from './Orders.store';
import priceReducer from './PricePerHour';

const store = configureStore({
  reducer: {
    car: carReducer.reducer,
    orders: ordersReducer.reducer,
    lots: lotsReducer.reducer,
    price: priceReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
