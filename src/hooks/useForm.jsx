import { useReducer } from "react";

export function useForm(initialState) {
    function reducer(state, action) {
        switch (action.type) {
            case "change":
                return { ...state, [action.field]: action.value };
            case "reset":
                return initialState;
            default:
                return state;
        }
    }
    return useReducer(reducer, initialState);
}
