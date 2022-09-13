import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/index";
import userReducer from "../reducers/user";

const store = configureStore({
  reducer: {
    post: postsReducer,
    user: userReducer,
  },
  
});
export default store
