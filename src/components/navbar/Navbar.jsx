import { NavLink } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";
import { Box } from "@mui/material";
import Toggler from "./Toggler";
import Style from "./Navbar.module.scss";

const links = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "ABOUT",
    to: "/about",
  },
  {
    name: "PORTFOLIO",
    to: "/portfolio",
  },
];

export default function Navbar() {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? "dark" : "light";

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60px",
        position: "fixed",
        top: "0",
        zIndex: 1,
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
            className={({ isActive }) =>
              isActive ? `${Style[theme]} ${Style.activeLink}` : ""
            }>
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
