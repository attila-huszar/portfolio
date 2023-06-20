import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Style from "./Layout.module.scss";
import { useDarkMode } from "usehooks-ts";
import ParticlesBg from "./particles/ParticlesBg";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

export default function Layout() {
  const { isDarkMode } = useDarkMode();

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
        <Grid item flexGrow={1}>
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
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}>
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
