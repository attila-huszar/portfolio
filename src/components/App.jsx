import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";
import Layout from "./Layout";

export default function App() {
  const { isDarkMode } = useDarkMode();
  const light = {
    palette: {
      mode: "light",
    },
  };
  const dark = {
    palette: {
      mode: "dark",
    },
  };

  return (
    <ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
