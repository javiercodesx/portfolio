import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import { Button } from './Button'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className="px-4 py-1 rounded-full border border-neutral-600 text-sm cursor-pointer"
      children={theme === 'dark' ? <IconMoon /> : <IconSun />}
    />
  )
}
