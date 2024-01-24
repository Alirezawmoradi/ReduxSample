import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../state/store.tsx";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
    reset,
    incrementAsync,
    decrementAsync
} from "../state/counter/counterSlice.tsx";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <h2>{count}</h2>
            <div style={{display: 'flex', justifyContent: "center", gap: "10px"}}>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount 10</button>
                <button onClick={() => dispatch(decrementByAmount(10))}>Decrement By Amount 10</button>
                <button onClick={() => dispatch(incrementAsync(10))}>IncrementAsync By Amount 10 After 5 Second</button>
                <button onClick={() => dispatch(decrementAsync(10))}>DecrementAsync By Amount 10 After 5 Second</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}
export default Counter;