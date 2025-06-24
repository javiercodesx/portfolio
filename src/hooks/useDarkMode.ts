import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === null ? true : saved === "true";
    });

    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode));
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);


    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return {
        darkMode,
        toggleTheme
    };
};
