// import { IconBriefcase } from "@tabler/icons-react";
// import { useEffect, useState } from "react";
// import { downloadPDF } from "./helpers/pdf"

import { Logo } from "./components/Logo"
import { ProfileImage } from "./components/ProfileImage"

function App() {
  // const [theme, setTheme] = useState(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   return storedTheme ? storedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  // });

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.querySelector("html").classList.add("dark");
  //   } else {
  //     document.querySelector("html").classList.remove("dark");
  //   }
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  // const handleTheme = () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

  return (
    <main className="bg-gray-900 min-h-screen ">

      <header className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-10">
          <a href="">
            <Logo />
          </a>

          <nav>
            <ul className="flex text-neutral-200 gap-5">
              <li><a href="#Home">Home</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="max-w-3xl mx-auto flex items-center justify-between mt-32">
        <div className="size-52">
          <ProfileImage />
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-semibold text-neutral-400">Hola, soy Javier Gonzalez</p>
          <h1 className="text-5xl font-semibold text-neutral-200">Desarrollador Full Stack</h1>
          <h3 className="text-2xl font-semibold text-neutral-400">de Buenos Aires, Argentina.</h3>
        </div>
      </section>
    </main>
  )
}

export default App
