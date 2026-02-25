import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../user/userSlice";

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser, (state) => {
      state.isSidebarOpen = false;
    });
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
