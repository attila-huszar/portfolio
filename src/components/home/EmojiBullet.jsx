import React from "react";
import { Box } from "@mui/material";

function EmojiBullet({ emoji, text, url }) {
  return (
    <Box
      component={"li"}
      style={{ cursor: "default", display: "flex", alignItems: "center" }}>
      <Box
        component={"span"}
        minWidth={"45px"}
        aria-label="short bio"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"2rem"}
        textAlign={"center"}>
        {emoji}
      </Box>
      {url ? (
        <a
          href={url}
          onClick={e => {
            e.preventDefault();
            window.open(url, "_blank");
          }}
          rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </Box>
  );
}

export default EmojiBullet;
