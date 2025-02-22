import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  ownerId: number;
  contactId: number;
  createdAt: string;
}

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
    online: boolean;
    contacts: Contact[];
  };
}

const initialState: AuthState = {
  user: {
    id: 0,
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
      console.log("setUser payload:", action.payload);
      state.user = {
        ...action.payload,
        contacts: action.payload.Contact || [],
      };
    },
    addContact(state, action) {
      if (!state.user.contacts) {
        state.user.contacts = [];
      }
      state.user.contacts.push(action.payload);
    },
  },
});

export const { setUser, addContact } = authSlice.actions;
export default authSlice.reducer;
