import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_MSG_COUNT } from "../utils/constants";



const chatSlice = createSlice({
    name: "chat",
    initialState: {
        liveMsgs: []
    },
    reducers: {
        addmsg: (state, action) => {
            if (state.liveMsgs.length > OFFSET_LIVE_MSG_COUNT) {
                state.liveMsgs.shift();
            }
            state.liveMsgs.push(action.payload);
        },

    }
})

export const { addmsg } = chatSlice.actions;
export default chatSlice.reducer;