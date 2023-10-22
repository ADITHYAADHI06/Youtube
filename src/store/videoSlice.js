import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        main_videos: [],
    },
    reducers: {
        addMainVideos: (state, action) => { state.main_videos = action.payload; }
    }
});

export const { addMainVideos } = videoSlice.actions
export default videoSlice.reducer;