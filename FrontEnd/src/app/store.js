import { configureStore } from '@reduxjs/toolkit';
import gods from '../features/gods/godSlice'


export const store = configureStore({
  reducer: {
    gods,
  },
});
