import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// //   loading: false,
//   userInfo: {}, // for user object
//   userToken: null, // for storing the JWT
//   error: null,
//   success: false, // for monitoring the registration process.
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },
    register: (state) => {
      state.user = null;
    },
  },
});
export const { signin, register } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
