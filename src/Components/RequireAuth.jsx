import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RequireAuth({ children }) {
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return <div>Please log in to access this page.</div>;
    }

    return children;
}

export default RequireAuth;
