import { apiGet } from "@/services/apiService";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LoginType {
  phone: string | number;
}

const initialState: LoginType = {
  phone: "",
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPhone } = loginSlice.actions;

export default loginSlice.reducer;
