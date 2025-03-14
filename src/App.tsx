import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./page/Hero";
import { ThemeProvider } from "./context/theme";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className="w-full h-screen dark:bg-main">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
