import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            style={{
                padding: "1rem 2rem",
                background: "#f5f5f5",
                borderBottom: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <h2 style={{ margin: 0 }}>Mini Blog</h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
                <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
                    Home
                </Link>
                <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "#333" }}>
                    Dashboard
                </Link>
                <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#333" }}>
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
