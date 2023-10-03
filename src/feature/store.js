
import { configureStore } from "@reduxjs/toolkit";

import milkReducer from "./milk/milkSlice";
import cakeReducer from "./cake/cakeSlice";
import userReducer from "./userReducer/userSlice";
const store = configureStore({
     reducer: {
          cake: cakeReducer,
          milk: milkReducer,
          users: userReducer,
     },
});
export default store;