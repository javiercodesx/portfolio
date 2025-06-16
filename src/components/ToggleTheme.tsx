import { useTheme } from '../context/ThemeContext'
import { Button } from './Button'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border border-gray-400 text-sm"
      children={`Change to ${theme === 'dark' ? 'Light' : 'Dark'}`}
    />
  )
}
