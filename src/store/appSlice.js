import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: false,
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        toggleSidebar: (state) => { state.isMenuOpen = !state.isMenuOpen; },
        closeSidebar: (state) => { state.isMenuOpen = false; }
    },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions
export default appSlice.reducer