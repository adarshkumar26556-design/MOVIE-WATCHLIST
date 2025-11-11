import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const PersistConfig = { key : "root", storage,};
const rootReducer = combineReducers({
  movies: movieReducer,
});
const persistedReducer = persistReducer( PersistConfig , rootReducer);

 export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
});

export const persistor = persistStore(store);
