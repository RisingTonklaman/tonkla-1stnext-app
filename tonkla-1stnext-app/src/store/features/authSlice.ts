import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthType {
    user : {
    id : string
    phone : string
    }
}

const initialState: AuthType = {
  user: {
    id : "",
    phone : ""
  },
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
    //  state.phone = action.payload;
    state.user = action.payload.data
    localStorage.setItem("accessToken" , action.payload.accessToken)
    console.log(state.user)

const in13Minutes = new Date(new Date().getTime() + 13 * 60 * 1000); // 13 นาทีจากตอนนี้
/*Cookies.set("refreshToken", action.payload.refreshToken, {
  expires: in13Minutes,
  secure: true,
  sameSite: "strict",
  path: "/",
});*/




    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
