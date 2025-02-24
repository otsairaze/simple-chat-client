import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalContent {
  Contacts = "Contacts",
  Settings = "Settings",
}

interface ModalState {
  isOpen: boolean;
  content: ModalContent | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<ModalContent>) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openDrawer, closeDrawer } = modalSlice.actions;
export default modalSlice.reducer;
