import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // Handle login logic here
                    localStorage.setItem("auth", "true");
                    navigate("/dashboard");
                    console.log("Login form submitted");
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    margin: "auto",
                    gap: "1rem",
                }}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
