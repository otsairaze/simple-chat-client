import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  ownerId: number;
  contactId: number;
  createdAt: string;
}

interface UserTypes {
  id: number;
  username: string;
  email: string;
  online: boolean;
  Contact: Contact[];
}

interface AuthState {
  user: UserTypes;
}

const initialState: AuthState = {
  user: {
    id: 0,
    username: "",
    email: "",
    online: true,
    Contact: [],
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserTypes>) {
      state.user = {
        ...action.payload,
      };
    },
    addContact(state, action) {
      if (!state.user.Contact) {
        state.user.Contact = [];
      }
      state.user.Contact.push(action.payload);
    },
  },
});

export const { setUser, addContact } = authSlice.actions;
export default authSlice.reducer;
