
import { Button } from "./Button";
import { IconBrandLinkedin, IconMailForward } from "@tabler/icons-react";

export const AboutMe = () => {
    return (
        <section className="max-w-3xl min-h-dvh px-2 md:px-0 md:flex md:items-center md:justify-between mx-auto">
            <img src="/javier_gonzalez.jpg" alt="Javier González" className="w-32 md:w-48 rounded-xl md:rounded-4xl bg-transparent" />
            <div className="flex flex-col gap-5 md:gap-4">
                <div className="mt-5 md:mt-0 space-y-1">
                    <h1 className="text-neutral-800 dark:text-neutral-300 text-2xl md:text-3xl font-black">Hey! I'm Javier</h1>
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

                <div className="flex gap-3">
                    <Button
                        className="flex items-center gap-1 text-md text-neutral-800 dark:text-neutral-200 px-3 py-1.5 rounded border border-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
                    >
                        <IconBrandLinkedin />
                        LinkedIn
                    </Button>

                    <Button
                        className="flex items-center gap-1 text-md text-neutral-800 dark:text-neutral-200 px-3 py-1.5 rounded border border-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
                    >
                        <IconMailForward />
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    )
}
