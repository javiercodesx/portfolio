//---------------------------------------------------------------------------------------------------------------------------------

import { useEffect, useState } from "react";

//---------------------------------------------------------------------------------------------------------------------------------

const useDarkMode: () => {
    darkMode: boolean;
    toggleTheme: () => void;
} = (): { darkMode: boolean; toggleTheme: () => void; } => {
    const [darkMode, setDarkMode]: [darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>] = useState((): boolean => {
        const saved: string | null = localStorage.getItem("darkMode");
        return saved === null ? true : saved === "true";
    });

    useEffect((): void => {
        localStorage.setItem("darkMode", (darkMode).toString());
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);


    const toggleTheme: () => void = (): void => {
        setDarkMode((prev: boolean): boolean => !prev);
    };

    return {
        darkMode,
        toggleTheme
    };
};

export { useDarkMode };