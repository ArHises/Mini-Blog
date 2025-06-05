import { useReducer } from "react";

// 1. Initial State
const initialState = { count: 0 };

// 2. Reducer Function
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action: " + action.type);
    }
}

// 3. Component
export function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Count: {state.count}</h1>
            <div>
                <button onClick={() => dispatch({ type: "increment" })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </div>
        </>
    );
}
