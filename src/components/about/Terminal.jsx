import { Box } from "@mui/material";
import Style from "./Terminal.module.scss";

export default function Terminal({ text }) {
  return (
    <Box
      component="section"
      className={`${Style.terminal} ${Style.shadowed}`}
      width={{ xs: "90%", md: "60%" }}>
      <Box backgroundColor="#8c8c8c" p="0.4rem" borderRadius="0.5rem 0.5rem 0 0">
        <span className={`${Style.red} ${Style.circle}`}></span>
        <span className={`${Style.yellow} ${Style.circle}`}></span>
        <span className={`${Style.green} ${Style.circle}`}></span>
      </Box>
      <Box
        backgroundColor="#27242f"
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius="0 0 0.5rem 0.5rem"
        fontFamily="Courier New, Courier, monospace">
        {text}
      </Box>
    </Box>
  );
}
