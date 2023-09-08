import { useContext } from "react";
import { DataContext } from "../App";
import { Grid } from "@mui/material";
import { PendingFetch } from "../PendingFetch";
import PortfolioBlock from "./PortfolioBlock";

export default function Portfolio() {
  const data = useContext(DataContext);
  if (!data) {
    return <PendingFetch />;
  }

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
            width={350}
            height={185}
          />
        </Grid>
      ))}
    </Grid>
  );
}
