import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { useDarkMode } from 'usehooks-ts'
import Style from './Layout.module.scss'
import ParticlesBg from './particles/ParticlesBg'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import CopyLeft from '../assets/svg/copyleft.svg?react'

export default function Layout() {
  const { isDarkMode } = useDarkMode()
  const location = useLocation()

  // Google Analytics
  useEffect(() => {
    gtag('event', `page_nav_to_${location.pathname}`)
  }, [location])

  return (
    <Box className={isDarkMode ? Style.dark : Style.light}>
      <ParticlesBg darkMode={isDarkMode} />
      <Grid
        container
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Grid>
        <Grid item>
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
