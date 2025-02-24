import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
