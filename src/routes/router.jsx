import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RequireAuth from "../Components/RequireAuth";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
                path="dashboard"
                element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;
