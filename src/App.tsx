import { ReactElement } from "react";
import { Header } from "./components/Header";

const App: () => ReactElement = (): ReactElement => {

  return (
    <>
      <Header />
      
      <h1 className="h1-title">
        Hey! I'm Javier. Full Stack Developer, I have a solid foundation in backend development, with a strong focus on Node.js — working with both Nest.js and Express.js. Specialized in building robust and scalable backend systems.
      </h1>
    </>
  )
}

export { App };