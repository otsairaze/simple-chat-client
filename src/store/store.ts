import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
