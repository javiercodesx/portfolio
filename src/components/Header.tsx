//---------------------------------------------------------------------------------------------------------------------------------

import { LogoDark } from "./LogoDark";
import { Logo } from "./Logo";
import { useDarkMode } from "../hooks/useDarkMode";
import HamburguerMenu from "./HamburguerMenu";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "./Button";

//---------------------------------------------------------------------------------------------------------------------------------

export const Header = () => {

    const { darkMode, toggleTheme } = useDarkMode();

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-neutral-200 dark:bg-neutral-950 border-b border-b-neutral-300 dark:border-b-neutral-900">
            <div className="max-w-4xl mx-auto p-2 md:py-4 flex items-center justify-between">
                {darkMode ? (
                    <a href="/"><LogoDark /></a>
                ) : (
                    <a href="/"><Logo /></a>
                )}

                <div className="hidden md:flex items-center gap-4">
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Experience">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Projects">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 text-md px-3 py-2 hover:bg-neutral-700 rounded transition ease-in" href="#Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        className="text-neutral-200 px-2 py-1.5 rounded border border-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
                        onClick={toggleTheme}
                    >
                        {darkMode ?
                            <IconMoon className='text-neutral-300 w-5 ' /> :
                            <IconSun className='text-neutral-800 w-5 ' />}
                    </Button>

                    <HamburguerMenu />
                </div>

            </div>
        </header>
    )
}
