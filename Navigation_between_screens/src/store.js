import { configureStore } from "@reduxjs/toolkit";
import valueManagement from "./screens/TabScreens/valueManagement";

export const store = configureStore({
    reducer: {
        value: valueManagement
    },
})

