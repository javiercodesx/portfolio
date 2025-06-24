import { Button } from './Button'

export const ThemeToggle = () => {

  return (
    <Button
      onClick={toggleTheme}
      className="py-1 px-2 rounded-full border border-neutral-600 text-sm cursor-pointer"
    />
  )
}
