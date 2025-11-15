//---------------------------------------------------------------------------------------------------------------------------------

import type { ReactElement } from 'react';

import { Button } from './Button';

//---------------------------------------------------------------------------------------------------------------------------------

const ThemeToggle: () => ReactElement = (): ReactElement => {

  return (
    <Button
      onClick={toggleTheme}
      className="py-1 px-2 rounded-full border border-neutral-600 text-sm cursor-pointer"
    />
  )
}

export { ThemeToggle };