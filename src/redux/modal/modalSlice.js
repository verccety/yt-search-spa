import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalVisible: false,
  },
  reducers: {
    setIsModalVisible(state) {
      state.isModalVisible = !state.isModalVisible;
    },
  },
});

export const { setIsModalVisible } = modalSlice.actions;

export default modalSlice.reducer;

export const selectIsModalVisible = (state) => state.modal.isModalVisible;
