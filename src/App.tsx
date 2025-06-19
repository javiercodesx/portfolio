import { Button } from "./components/Button"
import { Logo } from "./components/Logo"
import { LogoDark } from "./components/LogoDark"
import { ThemeToggle } from "./components/ToggleTheme"
import { useTheme } from "./context/ThemeContext"

export const App = () => {
  const { theme } = useTheme()
  return (
    <>
      <header className="max-w-3xl mx-auto p-2 md:px-0 flex items-center justify-between">
        <Button
          className="text-neutral-200 h-10 md:px-6 md:py-2 rounded-md"
          children={theme === "dark" ? <LogoDark/> : <Logo/>}
        />

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

        <ThemeToggle />
      </header>
    </>
  )
}
