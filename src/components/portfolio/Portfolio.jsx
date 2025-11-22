import { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { InfoContext } from '../../context/InfoProvider'
import { PortfolioBlock } from './PortfolioBlock'
import { PendingFetch } from '../PendingFetch'

export function Portfolio() {
  const info = useContext(InfoContext)

  if (!info) {
    return <PendingFetch />
  }

  return (
    <Grid
      container
      maxWidth={800}
      spacing={3}
      marginTop={12}
      marginBottom={4}
      marginX="auto"
      justifyContent="center">
      {info.portfolio.map((project, i) => (
        <Grid size={{ xs: 12, md: 6 }} key={i}>
          <PortfolioBlock
            title={project.title}
            deploy={project.deploy}
            code={project.code}
            image={project.image}
            blurHash={project.blurHash}
            width={350}
            height={185}
          />
        </Grid>
      ))}
    </Grid>
  )
}
