
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCake: 10,
};

// export default function cakeReducer(state = initialState, action) {
//     switch (action.type) {
//         case BUY_CAKE: {
//             return {
//                 ...state,
//                 numOfCake: (state.numOfCake - action.payload >= 0) ? state.numOfCake - action.payload : "0",
//             }
//         }
//         default: return state;
//     }
// }

const cakeSlice = createSlice(
    {
        name: "cake",
        initialState,
        reducers: {
            buyCake: (state,action) => {
                state.numOfCake = (state.numOfCake - action.payload>= 0) ? state.numOfCake -action.payload : "0";
                //immerjs => that allow us to mutate state!!
            },
        }
    }
)
export const { buyCake } = cakeSlice.actions;
export default cakeSlice.reducer;
