import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  value: string;
  globalValue: string;
}

const initialState: SearchState = {
  value: "",
  globalValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setGlobalSearchValue(state, action: PayloadAction<string>) {
      state.globalValue = action.payload;
    },
  },
});

export const { setSearchValue, setGlobalSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
