import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useDarkMode } from "usehooks-ts";
import Style from "./Layout.module.scss";
import ParticlesBg from "./particles/ParticlesBg";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

export default function Layout() {
  const { isDarkMode } = useDarkMode();
  const location = useLocation();

  // Google Analytics
  useEffect(() => {
    gtag("event", `page_nav_to_${location.pathname}`);
  }, [location]);

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
            style={{ opacity: 0.7, gap: "0.5rem", cursor: "default" }}>
            {"Attila Huszár"}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"
                transform="scale (-1, 1)"
                transform-origin="center"
              />
            </svg>
            {new Date().getFullYear()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
