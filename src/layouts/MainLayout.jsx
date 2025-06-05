import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

import "./MainLayout.css"; // Assuming you have a CSS file for styling

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
