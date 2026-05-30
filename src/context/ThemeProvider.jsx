import { createContext, useEffect, useMemo, useState } from 'react'

export const ThemeContext = createContext({
  isDarkMode: false,
  theme: 'light',
  toggleDarkMode: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('dark-mode')

    return storedTheme !== null
      ? JSON.parse(storedTheme)
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const theme = isDarkMode ? 'dark' : 'light'

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const nextState = !prevState
      localStorage.setItem('dark-mode', JSON.stringify(nextState))
      return nextState
    })
  }

  useEffect(() => {
    if (localStorage.getItem('dark-mode') !== null) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (localStorage.getItem('dark-mode') !== null) return

      setIsDarkMode(mediaQuery.matches)
    }
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const value = useMemo(
    () => ({ isDarkMode, theme, toggleDarkMode }),
    [isDarkMode, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
