import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
        </footer>
    );
}
