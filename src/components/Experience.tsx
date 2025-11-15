//---------------------------------------------------------------------------------------------------------------------------------

import type { ReactElement } from 'react';

//---------------------------------------------------------------------------------------------------------------------------------

const Experience: () => ReactElement = (): ReactElement => {
    return (
        <section className="border border-t-neutral-900">
            <div className="max-w-4xl min-h-[80dvh] md:px-2 md:flex md:flex-col md:gap-10 mx-auto">
                <h3 className="text-4xl font-black text-neutral-200 mt-10">
                    Experience
                </h3>

                <ol className="relative border-s border-gray-200 dark:border-neutral-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            2025 April - Currently
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Gestiar
                        </h3>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            I worked as a full-stack engineer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam ex quo, velit molestias ut aspernatur et laboriosam expedita veritatis?
                        </p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            2024 January - 2025 April
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Freelance
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export { Experience };