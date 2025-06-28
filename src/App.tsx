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
      <header className="max-w-4xl mx-auto p-2 md:px-0 md:py-4 flex items-center justify-between">

        {darkMode ? (
          <a href="/"><LogoDark /></a>
        ) : (
          <a href="/"><Logo /></a>
        )}

        <div className="hidden md:flex items-center gap-4">
          <nav>
            <ul className="flex gap-4">
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Home">Home</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Experience">Experience</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Projects">Projects</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="text-neutral-200 px-2 py-1.5 cursor-pointer rounded border border-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 transition ease-in"
            onClick={toggleTheme}
            content={darkMode ? <IconMoon className='text-neutral-300 w-5 ' /> : <IconSun className='text-neutral-800 w-5 ' />}
          />

          <HamburguerMenu />
        </div>

      </header>

      <section className="max-w-4xl px-2 md:px-0 mx-auto mt-[20dvh]">
          <img src="/javier_gonzalez.jpg" alt="Javier González" className="h-24 md:h-48 rounded-xl md:rounded-4xl bg-transparent" />
        <div className="flex items-center space-between">
          <h2 className="text-neutral-800 dark:text-neutral-300">Hola! soy Desarrollador Full Stack JavaScript</h2>
          <h3 className="text-neutral-800 dark:text-neutral-300">de Buenos Aires, Argentina.</h3>
        </div>
      </section>
    </>
  )
}
