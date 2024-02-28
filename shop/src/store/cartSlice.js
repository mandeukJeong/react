import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    increase(state, { payload: { id } }) {
      const changeItem = state.find((item) => item.id === id);
      changeItem.count += 1;
    },
    addItem(state, { payload: { newItem } }) {
      if (state.find((item) => item.id === newItem.id)) {
        state.find((item) => item.id === newItem.id).count += 1;
      } else {
        state.push({ id: newItem.id, name: newItem.content, count: 1 });
      }
    },
  },
});

export const { increase, addItem } = cart.actions;
export default cart;
