// Home.js
import React from "react";

import { Counter } from "../components/Counter";
import PhotosFetcher from "../api/UnsplashPhotosAPI";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Mini Blog App!</p>
            <PhotosFetcher />
        </div>
    );
};

export default Home;
