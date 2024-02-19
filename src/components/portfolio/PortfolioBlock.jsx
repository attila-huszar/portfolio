import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import { Box, Button } from '@mui/material'
import { Canvas } from './Canvas'
import ChromeIcon from '../../assets/svg/chrome.svg?react'
import CodeIcon from '../../assets/svg/code.svg?react'
import style from './PortfolioBlock.module.scss'

export function PortfolioBlock({
  image,
  deploy,
  code,
  title,
  blurHash,
  width,
  height,
}) {
  const [imageLoaded, setImageLoaded] = useState(() => {
    const img = new Image()
    img.src = image
    return img.complete
  })

  useEffect(() => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [])

  const { isDarkMode } = useContext(ThemeContext)
  const theme = isDarkMode ? 'dark' : 'light'

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <a href={deploy || code} target="_blank" rel="noopener noreferrer">
        <Box className={`${style.wrap} ${style[theme]}`}>
          <Box
            style={{
              width,
              height,
              gridRow: 1,
              gridColumn: 1,
              borderRadius: '25px',
              overflow: 'hidden',
              zIndex: -1,
            }}>
            <Canvas blurHash={blurHash} width={width} height={height} />
          </Box>
          <Box
            component="img"
            src={image}
            alt={`Screenshot of ${title}`}
            style={{
              opacity: imageLoaded ? 1 : 0,
              width,
              height,
              gridRow: 1,
              gridColumn: 1,
              borderRadius: '25px',
              objectFit: 'cover',
              transition: 'opacity 0.4s ease',
            }}
          />
        </Box>
        <p style={{ textAlign: 'center', fontSize: '1.25rem' }}>{title}</p>
      </a>
      <Box
        display="flex"
        flexDirection="row"
        gap="1rem"
        alignItems="center"
        py="1rem">
        {deploy && (
          <Button
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            disableElevation
            variant="outlined"
            color="inherit"
            style={{ borderRadius: '25px' }}
            startIcon={<ChromeIcon />}>
            Site
          </Button>
        )}

        {code && (
          <Button
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            disableElevation
            variant="outlined"
            color="inherit"
            style={{ borderRadius: '25px' }}
            startIcon={<CodeIcon />}>
            Code
          </Button>
        )}
      </Box>
    </Box>
  )
}
