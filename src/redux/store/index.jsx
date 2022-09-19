import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/index";
// import {applyMiddleware} from 'redux';
// import { getDefaultMiddleware} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
// import thunk from "redux-thunk"
import {setupListeners} from "@reduxjs/toolkit/query"
import { persistReducer , persistStore,
  //  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
  } from 'redux-persist'
import userReducer from "../reducers/user";
// import {fetchPosts} from "../reducers/index";



const persistConfig = {
  key:'posts',
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, postsReducer)
// const customizedMiddleware = thunk({
//   // serializableCheck: false
//     serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },

// })


export const store = configureStore({
  reducer: {
    posts: persistedReducer,
    user: userReducer,
    // middleware: thunk ({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
    // applyMiddleware(thunk)
    // middleware: customizedMiddleware
  },
});

setupListeners(store.dispatch)

export const persistor = persistStore(store)
export default store
