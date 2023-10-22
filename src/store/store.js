import appSlice from "./appSlice"
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        video: videoSlice
    }
})


export default store;