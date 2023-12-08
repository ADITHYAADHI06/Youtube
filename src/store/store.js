import appSlice from "./appSlice"
import chatSlice from "./chatSlice";
import mainSlice from "./mainSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        video: videoSlice,
        live: chatSlice,
        main: mainSlice,
    }
})


export default store;