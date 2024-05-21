import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice';  // Ensure this path is correct

const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export default store;
