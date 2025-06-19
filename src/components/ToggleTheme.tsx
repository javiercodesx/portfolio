import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import { Button } from './Button'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className="py-1 px-2 rounded-full border border-neutral-600 text-sm cursor-pointer"
      children={theme === 'dark' ? <IconMoon className='text-neutral-300 w-5' /> : <IconSun className=' w-5'/>}
    />
  )
}
