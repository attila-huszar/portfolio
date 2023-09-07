import { useContext } from "react";
import { DataContext } from "../App";
import { Grid } from "@mui/material";
import ringsLoader from "../../assets/rings.svg";
import PortfolioBlock from "./PortfolioBlock";

export default function Portfolio() {
  const data = useContext(DataContext);
  const imageWidth = 350;
  const imageHeight = 185;

  if (!data)
    return (
      <div style={{ width: "100%" }} title="Loading...">
        <img src={ringsLoader} style={{ margin: "auto" }} alt="Loading" />
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    );

  return (
    <Grid container maxWidth={"1100px"} rowGap={6} margin={"100px auto 0"}>
      {data.portfolio.map((project, i) => (
        <Grid item xs={12} md={6} key={i}>
          <PortfolioBlock
            title={project.title}
            live={project.live}
            source={project.source}
            image={project.image}
            blurHash={project.blurHash}
            width={imageWidth}
            height={imageHeight}
          />
        </Grid>
      ))}
    </Grid>
  );
}
