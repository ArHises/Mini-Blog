import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";

function RequireAuth({ children }) {
    const { user, setUser } = useUser();

    const isLoggedIn =
        user && user.userName === "admin" && user.password === "admin"; // Adjust this condition based on your auth logic
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
