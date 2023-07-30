import { Grid } from "@mui/material";
import PortfolioBlock from "./PortfolioBlock";
import info from "../../assets/info.json";

export default function Portfolio() {
  const imageWidth = 350;
  const imageHeight = 185;

  return (
    <Grid container maxWidth={"1100px"} rowGap={6} margin={"100px auto 0"}>
      {info.portfolio.map((project, i) => (
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
