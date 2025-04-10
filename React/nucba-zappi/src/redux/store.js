import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  productsReducer,
  recommendedReducer,
  categoriesReducer,
  cartReducer,
  userReducer,
} from "./slices";

const reducers = combineReducers({
  products: productsReducer,
  recommended: recommendedReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
