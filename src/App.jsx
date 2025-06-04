import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
    );
}

export default App;
