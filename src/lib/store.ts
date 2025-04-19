import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import { weatherApi } from "./api/weatherApi";

import authReducer from "./features/auth/authSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import themeReducer from "./features/theme/themeSlice";
import walkthroughReducer from "./features/walkthrough/walkthroughSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
  auth: authReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  walkthrough: walkthroughReducer,
  // Add other reducers here as needed
  // e.g., user: userReducer, products: productsReducer, etc.
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, weatherApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
