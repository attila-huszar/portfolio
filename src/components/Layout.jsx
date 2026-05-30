import { useEffect, useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
import { Box } from '@mui/material'
import { Navbar } from './navbar/Navbar'
import { Home } from './home/Home'
import { About } from './about/About'
import { Portfolio } from './portfolio/Portfolio'
import style from './Layout.module.scss'
import CopyLeft from '../assets/svg/copyleft.svg?react'

export function Layout() {
  const { isDarkMode } = useContext(ThemeContext)
  const location = useLocation()

  useEffect(() => {
    gtag('event', `page_nav_to_${location.pathname}`)
  }, [location])

  return (
    <Box
      className={isDarkMode ? style.dark : style.light}
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Box>
      <Box
        component="footer"
        sx={{
          width: '100%',
          height: '75px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.7,
          gap: '0.5rem',
          cursor: 'default',
        }}>
        Attila Huszár
        <CopyLeft />
        {new Date().getFullYear()}
      </Box>
    </Box>
  )
}
