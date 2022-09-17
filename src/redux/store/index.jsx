import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/index";
// import allReducers from "../reducers/combine";

import userReducer from "../reducers/user";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});
export default store
