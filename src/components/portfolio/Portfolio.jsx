import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../assets/info";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, i) => (
          <Grid item xs={12} md={6} key={i}>
            <PortfolioBlock
              title={project.title}
              live={project.live}
              source={project.source}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
