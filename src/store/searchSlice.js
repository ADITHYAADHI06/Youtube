import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        addSearchSugestions: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { addSearchSugestions } = searchSlice.actions;
export default searchSlice.reducer;

