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
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
            height={"75px"}>
            <p>
              Attila Huszár
              <i className="fa fa-copyright fa-flip-horizontal"></i>2023
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
