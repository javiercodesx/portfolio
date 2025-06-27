import { Button } from "./components/Button"
import { IconMoon, IconSun } from "@tabler/icons-react";
import { LogoDark } from "./components/LogoDark";
import { Logo } from "./components/Logo";
import { useDarkMode } from "./hooks/useDarkMode";
import HamburguerMenu from "./components/HamburguerMenu";

export const App = () => {
  const { darkMode, toggleTheme } = useDarkMode()

  return (
    <>
      <header className="max-w-3xl mx-auto p-2 md:px-0 md:py-4 flex items-center justify-between">

        {darkMode ? (
          <a href="/"><LogoDark /></a>
        ) : (
          <a href="/"><Logo /></a>
        )}

        <div className="hidden md:flex items-center gap-4">
          <nav>
            <ul className="flex gap-5">
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md" href="#Home">Home</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md" href="#Experience">Experience</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md" href="#Projects">Projects</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md" href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Button
            className="text-neutral-200 px-3 py-1 cursor-pointer rounded-full border border-neutral-800 dark:border-neutral-300"
            onClick={toggleTheme}
            content={darkMode ? <IconMoon className='text-neutral-300 w-4 hover:scale-105' /> : <IconSun className='text-neutral-800 w-4 hover:scale-105' />}
          />

          <HamburguerMenu />
        </div>

      </header>

      <section className="max-w-3xl px-2 md:px-0 mx-auto mt-[20dvh]">
          <img src="/javier_gonzalez.jpg" alt="Javier González" className="h-24 md:h-48 rounded-xl md:rounded-4xl" />
        <div className="flex items-center space-between">
          <h2 className="text-neutral-800 dark:text-neutral-300">Hola! soy Desarrollador Full Stack JavaScript</h2>
          <h3 className="text-neutral-800 dark:text-neutral-300">de Buenos Aires, Argentina.</h3>
        </div>
      </section>
    </>
  )
}
