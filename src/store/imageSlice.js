import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFile: null,
  convertedFile: null,
  format: 'jpeg',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setSelectedFile(state, action) {
      state.selectedFile = action.payload;
    },
    setConvertedFile(state, action) {
      state.convertedFile = action.payload;
    },
    setFormat(state, action) {
      state.format = action.payload;
    },
  },
});

export const { setSelectedFile, setConvertedFile, setFormat } = imageSlice.actions;

export default imageSlice.reducer;

