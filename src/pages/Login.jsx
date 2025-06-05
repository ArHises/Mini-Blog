import { useNavigate } from "react-router";
import { useReducer } from "react";
import "./Login.css";

const initialForm = {
    userName: "",
    password: "",
};

function formReducer(state, action) {
    switch (action.type) {
        case "change":
            return { ...state, [action.field]: action.value };
        case "reset":
            return initialForm;
        default:
            return state;
    }
}

const Login = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(formReducer, initialForm);

    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    localStorage.setItem(state.userName, state.password);
                    dispatch({ type: "reset" });
                    navigate("/dashboard");
                    console.log("Login form submitted");
                }}>
                <input
                    value={state.userName}
                    onChange={(e) =>
                        dispatch({
                            type: "change",
                            field: "userName",
                            value: e.target.value,
                        })
                    }
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={state.password}
                    onChange={(e) =>
                        dispatch({
                            type: "change",
                            field: "password",
                            value: e.target.value,
                        })
                    }
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
