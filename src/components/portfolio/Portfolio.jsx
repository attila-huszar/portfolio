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
    <Grid container maxWidth="1100px" rowGap={6} margin="100px auto 0">
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
