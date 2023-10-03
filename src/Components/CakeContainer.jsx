import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../feature/cake/cakeSlice";



export default function cakecontainer() {
    const [value, setvalue] = useState("");
    // 1.accept a function as its Parameter :selector function
    // 2. useSelector or hooks return whatever returns by selector function 
    const cake = useSelector((state) => state.cake);
    // console.log(state)
    // return a refrence to the dispatch function in redux store
    const dispatch = useDispatch()
    return (
        <div>
            <h2>cake number:{cake.numOfCake}</h2>
            <span> custom :</span> <input type="number" value={value} onChange={(e) => setvalue(e.target.value)} />
            {/* <button onClick={() => dispatch({ type: "BUY-CAKE", payload: value })}>buy Cake</button>            */}
            {/*  type of dispatch  change in cake action ====>action.type change in all component  ====best data management  */}
            <button onClick={() => dispatch(buyCake(value))}>buy Cake</button>
            <div>
                <span>-1:</span>   <button onClick={() => dispatch(buyCake(1))}>buy Cake</button>
            </div>
        </div>
    )
}

// 1.how to dispatch actions
// 2. how to access to redux store

//without  hooks  (cc)=>  mapStateTopProps , mapDispatchToprops  =>  BAD PRACTIES