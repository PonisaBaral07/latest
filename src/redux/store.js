import { configureStore } from '@reduxjs/toolkit'
import OrderReducer from "../redux/feature/orderSlice";
export const store=configureStore({
  reducer: {
    order:OrderReducer,
  },
});
