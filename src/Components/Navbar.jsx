import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/login", label: "Login" },
];

const Navbar = () => (
    <nav aria-label="Main navigation">
        <h2>My Blog</h2>
        <ul className="nav-links">
            {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                    <NavLink to={to} end={end}>
                        {({ isActive }) => (
                            <span className={isActive ? "active-link" : ""}>
                                {label}
                            </span>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navbar;
