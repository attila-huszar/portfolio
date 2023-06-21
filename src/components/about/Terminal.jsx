import { Box } from "@mui/material";
import Style from "./Terminal.module.scss";
import classNames from "classnames";

export default function Terminal({ text }) {
  return (
    <Box
      component={"section"}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: "90%", md: "50%" }}
      borderRadius={"0.5rem"}
      m={"50px 0 0"}>
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.4rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1.2rem"}>
        <i className={classNames("fa fa-circle", Style.red)} />
        <i className={classNames("fa fa-circle", Style.amber)} />
        <i className={classNames("fa fa-circle", Style.green)} />
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
