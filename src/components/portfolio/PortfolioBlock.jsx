import React from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { FaChrome, FaCode } from "react-icons/fa";
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock({ image, live, source, title }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <a href={live} target={"_blank"} rel="noopener noreferrer">
        <Box className={Style.wrap}>
          <Box
            component={"img"}
            src={image}
            alt={"Screenshot of website"}
            sx={{
              borderRadius: "25px",
              boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.4)",
            }}
          />
        </Box>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>{title}</p>
      </a>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"1rem"}
        alignItems={"center"}
        fontSize={"1.1rem"}
        py={"1rem"}>
        {live && (
          <Button
            href={live}
            target={"_blank"}
            rel="noopener noreferrer"
            disableElevation
            variant="outlined"
            color="inherit"
            startIcon={<FaChrome />}
            sx={{ borderRadius: "25px" }}>
            Site
          </Button>
        )}

        {source && (
          <Button
            href={source}
            target={"_blank"}
            rel="noopener noreferrer"
            disableElevation
            variant="outlined"
            color="inherit"
            startIcon={<FaCode />}
            sx={{ borderRadius: "25px" }}>
            Source
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
