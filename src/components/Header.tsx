import { ReactElement } from "react";
import { LogoDark } from "./LogoDark";
import { Logo } from "./Logo";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const Header: () => ReactElement = (): ReactElement => {

    const darkMode: boolean = true;

    const toggleTheme: () => void = (): void => {
        console.log('Handling theme...');
    }

    return (
        <header >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', }}>
                {darkMode ? (
                    <a style={{ display: 'flex', height: '1.5rem', }} href="/"><LogoDark /></a>
                ) : (
                    <a style={{ display: 'flex', height: '1.5rem', }} href="/"><Logo /></a>
                )}

                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', }}>
                        <li style={{ padding: '0.3rem 1.5rem', color: '#fafafa', fontWeight: 700, }}>
                            <a>
                                Home
                            </a>
                        </li>
                        <li style={{ padding: '0.3rem 1.5rem', color: '#fafafa', fontWeight: 700, }}>
                            <a>
                                Experience
                            </a>
                        </li>
                        <li style={{ padding: '0.3rem 1.5rem', color: '#fafafa', fontWeight: 700, }}>
                            <a>
                                Projects
                            </a>
                        </li>
                        <li style={{ padding: '0.3rem 1.5rem', color: '#fafafa', fontWeight: 700, }}>
                            <a>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <button
                        // className="text-neutral-200 px-2 py-1.5 rounded border border-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
                        onClick={toggleTheme}
                    >
                        {darkMode ?
                            <SunIcon /> :
                            <MoonIcon />
                        }
                    </button>

                </div>

            </div>
        </header>
    )
}

export { Header };