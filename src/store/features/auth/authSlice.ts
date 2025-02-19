import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  ownerId: number;
  contactId: number;
  createdAt: string;
}

interface AuthState {
  user: {
    username: string;
    email: string;
    online: boolean;
    contacts: Contact[];
  };
}

const initialState: AuthState = {
  user: {
    username: "",
    email: "",
    online: true,
    contacts: [],
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
