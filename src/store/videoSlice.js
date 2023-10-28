import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        searchResultVidoes: [],
        resultVideos: []
    },
    reducers: {
        setSearchResultVidoes: (state, action) => { state.searchResultVidoes = action.payload; },
        setResultVideos: (state, action) => { state.resultVideos = action.payload; },
    }
});

export const { setSearchResultVidoes, setResultVideos } = videoSlice.actions;
export default videoSlice.reducer;