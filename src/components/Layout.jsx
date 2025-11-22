import { useEffect, useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
import { Box, Grid } from '@mui/material'
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
    <Box className={isDarkMode ? style.dark : style.light}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between">
        <Grid>
          <Navbar />
        </Grid>
        <Grid>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Grid>
        <Grid>
          <Box
            component="footer"
            width="100%"
            height="75px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ opacity: 0.7, gap: '0.5rem', cursor: 'default' }}>
            {'Attila Huszár'}
            <CopyLeft />
            {new Date().getFullYear()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
