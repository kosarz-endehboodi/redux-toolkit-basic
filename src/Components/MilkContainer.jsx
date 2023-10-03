import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyMilk } from "../feature/milk/milkSlice";


export default function cakecontainer() {
    const [value, setvalue] = useState("");
    // 1.accept a function as its Parameter :selector function
    // 2. useSelector or hooks return whatever returns by selector function 
    const milk = useSelector((state) => state.milk);
    // console.log(state)
    // return a refrence to the dispatch function in redux store
    const dispatch = useDispatch()
    return (
        <div>
            <h2>milk number:  {milk.numOfMilk}</h2>
            <span>milk custom :   </span> <input type="number" value={value} onChange={(e) => setvalue(e.target.value)} />
            {/* <button onClick={() => dispatch({ type: "BUY-CAKE", payload: value })}>buy Cake</button>            */}
            {/*  type of dispatch  change in cake action ====>action.type change in all component  ====best data management  */}
          
          
            <button onClick={() => dispatch(buyMilk(value))}>buy Cake</button>
            <div>
                <span>-1:</span>   <button onClick={() => dispatch(buyMilk(1))}>buy Cake</button>
            </div>
        </div>
    )
}
