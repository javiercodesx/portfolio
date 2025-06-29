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

      <section className="max-w-3xl px-2 md:px-0 md:flex md:justify-between mx-auto mt-[10dvh] md:mt-[20dvh]">
        <img src="/javier_gonzalez.jpg" alt="Javier González" className="h-32 md:h-48 rounded-xl md:rounded-4xl bg-transparent" />
        <div className="flex flex-col gap-5 md:gap-4">
          <div className="mt-5 md:mt-0 space-y-1">
            <h1 className="text-neutral-800 dark:text-neutral-300 text-3xl md:text-4xl font-black">Hey! I'm Javier</h1>
            <h2 className="bg-gradient-to-r from-[#C778DD] to-[#652f8f] bg-clip-text text-transparent text-3xl md:text-5xl font-black">Full Stack Developer</h2>
          </div>

          <p className="text-neutral-800 dark:text-neutral-400 max-w-[33rem] text-lg">
            I have a solid foundation in {''}
            <strong className="text-neutral-800 dark:text-neutral-300 font-bold">backend development,</strong> {''}
            with a strong focus on Node.js — working with both {''}
            <strong className="text-neutral-800 dark:text-neutral-300 font-bold">Nest.js and Express.js.</strong> {''}
            Specialized in building {''}
            <strong className="text-neutral-800 dark:text-neutral-300 font-bold">robust and scalable</strong> backend systems.
          </p>
        </div>
      </section>
    </>
  )
}
