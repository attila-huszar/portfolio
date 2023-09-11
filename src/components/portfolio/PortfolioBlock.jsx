import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { Box, Button } from "@mui/material";
import Style from "./PortfolioBlock.module.scss";
import Canvas from "./Canvas";

export default function PortfolioBlock({ image, live, source, title, blurHash, width, height }) {
  const [imageLoaded, setImageLoaded] = useState(() => {
    const img = new Image();
    img.src = image;
    return img.complete;
  });

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? "dark" : "light";

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <a href={source} target={"_blank"} rel="noopener noreferrer">
        <Box className={`${Style.wrap} ${Style[theme]}`}>
          <Box
            sx={{
              width,
              height,
              gridRow: 1,
              gridColumn: 1,
              borderRadius: "25px",
              overflow: "hidden",
              zIndex: -1,
            }}>
            <Canvas blurHash={blurHash} width={width} height={height} />
          </Box>
          <Box
            component="img"
            src={image}
            alt={`Screenshot of ${title}`}
            sx={{
              opacity: imageLoaded ? 1 : 0,
              width,
              height,
              gridRow: 1,
              gridColumn: 1,
              borderRadius: "25px",
              objectFit: "cover",
              transition: "opacity 0.4s ease",
            }}
          />
        </Box>
        <p style={{ textAlign: "center", fontSize: "1.25rem" }}>{title}</p>
      </a>
      <Box display="flex" flexDirection="row" gap="1rem" alignItems="center" py="1rem">
        {live && (
          <Button
            href={live}
            target={"_blank"}
            rel="noopener noreferrer"
            disableElevation
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "25px" }}
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"
                />
              </svg>
            }>
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
            sx={{ borderRadius: "25px" }}
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            }>
            Code
          </Button>
        )}
      </Box>
    </Box>
  );
}
