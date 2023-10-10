import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: true,
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        toggleSidebar: (state) => { state.isMenuOpen = !state.isMenuOpen; }
    },
});

export const { toggleSidebar } = appSlice.actions
export default appSlice.reducer