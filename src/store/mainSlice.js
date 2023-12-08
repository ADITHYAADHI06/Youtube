

import { createSlice } from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: "main",
    initialState: {
        videos: [],
        searchText: ""
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        SetsearchText: (state, action) => {
            state.searchText = action.payload;
        },
    }
})

export const { setVideos, SetsearchText } = mainSlice.actions;
export default mainSlice.reducer;