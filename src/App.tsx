import { IconBriefcase } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

  return (
    <>
      <div className="sticky top-0 flex justify-between py-1 items-center md:py-2 bg-white/80 dark:bg-[#282c33b0]">
        {/* <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img className='h-7' src={theme === "light" ? images.logo : images.logoDark} alt="Logo" />
        </button> */}

        <div className='flex items-center gap-7'>
          <nav className="flex gap-7 font-semibold">
            <a
              href="#about"
              className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300">
              <span className='text-[#C778DD]'># {''}</span>
              Experiencia
            </a>
            <a
              href="#skills"
              className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300">
              <span className='text-[#C778DD]'># {''}</span>
              Proyectos
            </a>
            <a
              href="#projects"
              className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300">
              <span className='text-[#C778DD]'># {''}</span>
              Redes
            </a>
            <a
              href="#contact"
              className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300">
              <span className='text-[#C778DD]'># {''}</span>
              Contacto
            </a>
          </nav>

          <button
            className="flex justify-center items-center p-3 bg-transparent text-3xl pointer"
            onClick={handleTheme}>
            {theme === "light" ? (
              <i className="bx bx-moon text-black"></i>
            ) : (
              <i className="bx bx-sun text-white"></i>
            )}
          </button>
        </div>
      </div>
      
      <div className='md:flex items-center px-3 md:px-0 mt-2 md:mt-10 gap-x-10 mb-16'>
        {/* <img className='border-4 border-neutral-200 size-28 md:size-36 rounded-full mx-auto md:m-0 mb-2 md:mb-0'
          src={images.personalPhoto} alt="Foto de Javier González" /> */}
        <div className='text-center'>
          <h1 className='text-yellow-500 font-bold text-3xl md:flex md:text-6xl md:pb-2'>Javier González</h1>
          <h2 className='text-black dark:text-neutral-200 font-semibold text-lg pt-1 pb-2'>
            Analista de sistemas y Desarrollador Full Stack de <span className='text-blue-400'>Argentina</span>.</h2>
          <div className='md:flex'>
            <button
              className="text-black font-semibold px-4 py-2 bg-yellow-400/90 hover:bg-yellow-300 rounded-md"
              onClick={() => {}}>
              Descargar CV
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <h2 className="text-yellow-500 font-bold text-2xl md:text-3xl">
          Experiencia
        </h2>
        <IconBriefcase className="text-yellow-500 size-10" />

      </div>

    </>
  )
}

export default App
