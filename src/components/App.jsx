import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";
import Layout from "./Layout";
import dataFallback from "../assets/info_fallback.json";

export const DataContext = createContext(dataFallback);

export default function App() {
  const { isDarkMode } = useDarkMode();
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://cinkes.s3.eu-north-1.amazonaws.com/portfolio/info.json"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      setData(dataFallback);
    }
  }

  // Theme
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
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </DataContext.Provider>
    </ThemeProvider>
  );
}
