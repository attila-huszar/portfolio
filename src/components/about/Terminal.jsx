import { Box } from "@mui/material";
import Style from "./Terminal.module.scss";

export default function Terminal({ text }) {
  return (
    <Box
      component={"section"}
      className={`${Style.terminal} ${Style.shadowed}`}
      width={{ xs: "90%", md: "60%" }}>
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.4rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1.2rem"}>
        <i className={`${Style.red} fa fa-circle`} />
        <i className={`${Style.amber} fa fa-circle`} />
        <i className={`${Style.green} fa fa-circle`} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontFamily={"Courier New, Courier, monospace"}>
        {text}
      </Box>
    </Box>
  );
}
