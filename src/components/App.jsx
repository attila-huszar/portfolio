import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";
import Layout from "./Layout";
//import { logGa } from './utils/log';

function App() {
  // useEffect(() => {
  //   logGa('home_page_visit');
  // }, []);

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

export default App;
