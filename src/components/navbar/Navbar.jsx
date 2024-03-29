import { useState, useEffect, useRef, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider'
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
  const { isDarkMode } = useContext(ThemeContext)
  const theme = isDarkMode ? 'dark' : 'light'
  const navbarRef = useRef()
  const tabRefs = useRef({})
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (tabRefs.current['home'] && navbarRef.current) {
      const firstTabOffset = tabRefs.current['home'].offsetLeft
      navbarRef.current.style.setProperty('--_left', firstTabOffset + 'px')

      for (const ref in tabRefs.current) {
        const tabRef = tabRefs.current[ref]

        if (tabRef.className.includes('activeLink')) {
          navbarRef.current.style.setProperty(
            '--_offset',
            tabRef.offsetLeft - firstTabOffset + 'px',
          )
          navbarRef.current.style.setProperty(
            '--_width',
            tabRef.offsetWidth + 'px',
          )
        }
      }
    }
  }, [Object.keys(tabRefs.current), windowWidth])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <Box
      component="ul"
      className={`${style[theme]} ${style.navbar}`}
      ref={navbarRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '60px',
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
      gap={{ xs: '2rem', md: '8rem' }}>
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
