import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Grid } from '@mui/material'
import { PortfolioBlock } from './PortfolioBlock'
import { PendingFetch } from '../PendingFetch'

export function Portfolio() {
  const data = useContext(DataContext)

  if (!data) {
    return <PendingFetch />
  }

  return (
    <Grid
      container
      maxWidth={800}
      gap={6}
      marginTop={12}
      marginBottom={4}
      marginX="auto"
      justifyContent="center">
      {data.portfolio.map((project, i) => (
        <Grid item xs={12} md={6} key={i}>
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
