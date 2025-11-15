//---------------------------------------------------------------------------------------------------------------------------------

import type { ReactElement } from "react";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";

//---------------------------------------------------------------------------------------------------------------------------------

const App: () => ReactElement = (): ReactElement => {

  return (
    <>
      <Header />

      <AboutMe />

      <Experience />
    </>
  )
}

export { App };