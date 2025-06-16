import { Button } from "./components/Button"
import { Logo } from "./components/Logo"

export const App = () => {

  return (
    <>
      <header className="max-w-3xl mx-auto py-3 flex items-center justify-between">
        <Button className="text-neutral-200 px-6 py-2 border border-gray-400 rounded-md" children={<Logo />} />

        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-5">
              <li><a className="text-neutral-800 dark:text-neutral-200" href="#Home">Home</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200" href="#Experience">Experience</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200" href="#Projects">Projects</a></li>
              <li><a className="text-neutral-800 dark:text-neutral-200" href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
