import { useEffect, useState } from "react";
import "./UnsplashPhotosAPI.css";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export default function PhotosFetcher() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!ACCESS_KEY) {
            console.error("Unsplash API key is not set.");
            return;
        }
        fetch(
            `https://api.unsplash.com/photos/random?count=4&client_id=${ACCESS_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Unsplash Images</h1>
            <div className="unsplash-slider">
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.urls.small}
                        alt={img.alt_description}
                        style={{
                            width: "200px",
                            margin: "10px 10px 10px 0",
                            borderRadius: "8px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
