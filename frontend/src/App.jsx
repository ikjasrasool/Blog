import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [theme, setTheme] = useState("dark"); // Theme state

    const NAVBAR_ITEMS = [
        { icon: "🏠", text: "home", component: <HomePage /> },
        { icon: "🖼️", text: "About", component: <AboutPage /> },
        { icon: "🔍", text: "search", component: <SearchPage /> },
        { icon: "🤦", text: "Profile", component: <ProfilePage /> },
    ];

    const activePage = NAVBAR_ITEMS[activePageIndex].component;

    // Toggle Theme Function
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`app ${theme}`}>
            {/* Pass theme and toggleTheme to NavBar */}
            <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} theme={theme} toggleTheme={toggleTheme} />
            <div className="main-container">
                {activePage}
            </div>
        </div>
    );
}

export default App;
