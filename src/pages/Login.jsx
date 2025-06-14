import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useUser } from "../contexts/UserContext";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useForm({ userName: "", password: "" });
    const { user, setUser } = useUser();

    const registerUser = (userName, password) => {
        // Simulate a registration process
        console.log(`Registering user: ${userName} with password: ${password}`);
        setUser({ userName, password });
        console.log("User registered:", user);
    };

    const logOutUser = () => {
        // Simulate a logout process
        console.log("Logging out user");
        setUser(null);
        console.log("User logged out");
    };

    if (user) {
        return (
            <div>
                <h1>Welcome back, {user.userName}!</h1>
                <button className="logout-button" onClick={logOutUser}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    registerUser(state.userName, state.password);
                    dispatch({ type: "reset" });
                    navigate("/dashboard");
                }}>
                <input
                    name="userName"
                    value={state.userName}
                    onChange={(e) =>
                        dispatch({
                            type: "change",
                            field: "userName",
                            value: e.target.value,
                        })
                    }
                    placeholder="Username"
                    minLength={4}
                    required
                />
                <input
                    name="password"
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
                    minLength={4}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
