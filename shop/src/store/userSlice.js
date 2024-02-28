import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    changeAge(state, { payload }) {
      state.age = state.age + payload;
    },
  },
});

export const { changeName, changeAge } = user.actions;
export default user;
