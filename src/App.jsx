import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import BreakingNews from "./components/BreakingNews";

export default function App() {
  const [section, setSection] = useState("home");

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : "light"}>

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌙" : "☀️"}
      </button>

      <Navbar onSectionChange={setSection} activeSection={section} />
      <BreakingNews />

      <Routes>
        <Route path="/" element={<Home section={section} />} />
        <Route
          path="/article/:articleUrl"
          element={<ArticleDetail section={section} />}
        />
      </Routes>

      <Footer />
    </div>

  );
}
