import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { IconButton } from '@mui/material'
import iconSun from '../../assets/svg/icon_sun.svg'
import iconMoon from '../../assets/svg/icon_moon.svg'

export function Toggler() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  function themeAnalytics() {
    gtag('event', 'darkmode_toggled', {
      time: Date.now(),
    })
  }

  const handleChange = () => {
    toggleDarkMode()
    themeAnalytics()
  }

  return (
    <IconButton
      style={{
        width: '36px',
        height: '36px',
        backgroundColor: isDarkMode ? '#003892' : '#336699',
        boxShadow: isDarkMode ? '' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
      onClick={handleChange}>
      <img src={isDarkMode ? iconMoon : iconSun} alt="darkmode toggle" />
    </IconButton>
  )
}
