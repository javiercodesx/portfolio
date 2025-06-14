// import { IconBriefcase } from "@tabler/icons-react";
// import { useEffect, useState } from "react";
// import { downloadPDF } from "./helpers/pdf"

import { useEffect, useState } from "react";
import { Logo } from "./components/Logo"
import { LogoDark } from "./components/LogoDark"
import { ProfileImage } from "./components/ProfileImage"
import { IconMoon, IconSun } from "@tabler/icons-react"

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

  return (
    <main className="bg-neutral-100 dark:bg-gray-900  min-h-screen ">

      <header className="sticky top-0 z-50 bg-neutral-100/90  dark:bg-gray-900/90">
        <div className="flex items-center justify-between py-5 max-w-3xl mx-auto w-full border-b border-b-neutral-200 dark:border-b-gray-800">
          <button
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {theme === "light" ? <Logo /> : <LogoDark />}
          </button>

          <div className="flex items-center gap-4">
            <nav>
              <ul className="flex gap-5">
                <li><a className="text-neutral-800 dark:text-neutral-200" href="#Home">Home</a></li>
                <li><a className="text-neutral-800 dark:text-neutral-200" href="#Experience">Experience</a></li>
                <li><a className="text-neutral-800 dark:text-neutral-200" href="#Projects">Projects</a></li>
                <li><a className="text-neutral-800 dark:text-neutral-200" href="#Contact">Contact</a></li>
              </ul>
            </nav>

            <button
              className="flex justify-center items-center px-1 py-1 rounded-md bg-transparent h-8 cursor-pointer border border-gray-400 dark:border-gray-700"
              onClick={handleTheme}
            >
              {theme === "light" ? (
                <IconMoon />
              ) : (
                <IconSun className="text-neutral-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-3xl mx-auto flex items-center justify-between mt-32">
        <div className="size-48 shadow-lg">
          <ProfileImage />
        </div>

        <div className="space-y-3">
          <p className="text-3xl font-semibold text-neutral-700 dark:text-neutral-400">Hola, soy Javier González</p>
          <h1 className="text-5xl font-bold text-neutral-800 dark:text-neutral-200">Desarrollador Full Stack</h1>
          <h3 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-400">de Buenos Aires, Argentina.</h3>
        </div>
      </section>

    </main>
  )
}

export default App
