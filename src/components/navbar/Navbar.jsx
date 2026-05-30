import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider'
import { useNavIndicator } from '../../hooks/useNavIndicator'
import { Box } from '@mui/material'
import { Toggler } from './Toggler'
import style from './Navbar.module.scss'

const links = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'about',
    to: '/about',
  },
  {
    name: 'portfolio',
    to: '/portfolio',
  },
]

export function Navbar() {
  const { pathname } = useLocation()
  const { navbarRef, tabRefs } = useNavIndicator(links, pathname)
  const { isDarkMode, theme } = useContext(ThemeContext)

  return (
    <Box
      component="ul"
      className={`${style[theme]} ${style.navbar}`}
      ref={navbarRef}
      style={{
        position: 'fixed',
        top: '0',
        zIndex: 1,
        fontSize: '18px',
        textShadow: isDarkMode ? '' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        textTransform: 'uppercase',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: isDarkMode
          ? 'rgba(0, 0, 0, 0.2)'
          : 'rgba(235, 232, 224, 0.6)',
      }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '60px',
        gap: { xs: '2rem', md: '8rem' },
      }}>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.to}
            ref={(e) => (tabRefs.current[link.name] = e)}
            className={({ isActive }) =>
              isActive ? `${style[theme]} ${style.activeLink}` : ''
            }>
            {link.name}
          </NavLink>
        </li>
      ))}
      <li>
        <Toggler />
      </li>
    </Box>
  )
}
