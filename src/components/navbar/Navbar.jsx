import { NavLink } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";
import { Box } from "@mui/material";
import Style from "./Navbar.module.scss";
import Toggler from "./Toggler";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About me",
    to: "/about",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
  },
];

export default function Navbar() {
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      className={isDarkMode ? Style.dark : Style.light}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60px",
        position: "fixed",
        top: "0",
        fontSize: "18px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "all 0.4s ease",
        background: isDarkMode
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(255, 255, 255, 0.2)",
      }}
      component={"ul"}
      gap={{ xs: "2rem", md: "8rem" }}>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.to}
            style={{ padding: "15px 0" }}
            className={({ isActive }) => (isActive ? Style.active : "")}>
            {link.name}
          </NavLink>
        </li>
      ))}
      <li>
        <Toggler />
      </li>
    </Box>
  );
}
