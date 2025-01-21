import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import robotsSlice from "./slices/robotsSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        robots: robotsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;