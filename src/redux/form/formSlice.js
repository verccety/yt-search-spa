import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    initialValues: {
      ['request']: '',
      ['favoriteName']: '',
      ['maxItems']: 12,
      ['sortBy']: '',
    },
  },
  reducers: {
    setInitialValues(state, { payload }) {
      state.initialValues = { ...payload };
    },
  },
});

export const { setInitialValues } = formSlice.actions;

export default formSlice.reducer;

export const selectFormInitialValues = (state) => state.form.initialValues;
