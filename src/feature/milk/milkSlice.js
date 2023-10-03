
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfMilk: 30,
};

// export default function milkReducer(state = initialState, action) {
//     switch (action.type) {
//         case BUY_MILK: {
//             return {
//                 ...state,
//                 numOfMilk: (state.numOfMilk - action.payload >= 0) ? state.numOfMilk - action.payload : "0",
//             }
//         }
//         default: return state;
//     }
// }

const milkSlice = createSlice({
    name: "milk",
    initialState,
    reducers: {
        buyMilk: (state, action) => {
            state.numOfMilk = state.numOfCake = (state.numOfMilk - action.payload >= 0) ? state.numOfMilk -action.payload : "0";
            //immerjs => that allow us to mutate state!!
        },
    }
})

export const { buyMilk } = milkSlice.actions;
export default milkSlice.reducer;