import { useState } from "react";
import "./NavBar.css";

function NavBar({ ITEMS, setActivePageIndex, theme, toggleTheme }) {
    const [active, setActive] = useState(0);

    function handleClick(index) {
        setActive(index);
        setActivePageIndex(index);
    }

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                {
                    ITEMS.map((val, idx) => {
                        return (
                            <div
                                key={idx}
                                className={"item " + (idx === active ? " active" : "")}
                                onClick={() => handleClick(idx)}
                            >
                                <div className="icon">{val.icon}</div>
                                <div className="text">{val.text}</div>
                            </div>
                        );
                    })
                }
                {/* Theme Toggle Button Inside Navbar */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </div>
        </div>
    );
}

export default NavBar;
