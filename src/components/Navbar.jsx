import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onSectionChange, activeSection }) {
    return (
        <header className="navbar">
            {/* Logo */}
            <h1 className="logo">
                <Link to="/" onClick={() => onSectionChange("home")}>
                    The Luciano Times
                </Link>
            </h1>

            <p className="date-today">
                {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>

            {/* Menu */}
            <nav className="navbar-menu">
                <Link
                    to="/"
                    className={activeSection === "home" ? "active" : ""}
                    onClick={() => onSectionChange("home")}
                >
                    Home
                </Link>
                <Link
                    to="/"
                    className={activeSection === "world" ? "active" : ""}
                    onClick={() => onSectionChange("world")}
                >
                    World
                </Link>
                <Link
                    to="/"
                    className={activeSection === "technology" ? "active" : ""}
                    onClick={() => onSectionChange("technology")}
                >
                    Technology
                </Link>
            </nav>
        </header>
    );
}