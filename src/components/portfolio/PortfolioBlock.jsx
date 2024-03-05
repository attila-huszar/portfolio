import { useState, useContext } from 'react'
import { blurhashAsGradients } from 'blurhash-gradients'
import { ThemeContext } from '../../context/ThemeProvider'
import { Box, Button } from '@mui/material'
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
  const { isDarkMode } = useContext(ThemeContext)
  const theme = isDarkMode ? 'dark' : 'light'
  const img = new Image()
  img.src = image
  const [imgLoaded, setImgLoaded] = useState(img.complete)
  img.onload = () => setImgLoaded(true)
  const cssBlurhash = blurhashAsGradients(blurHash)

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <a
        href={deploy || code}
        className={style.link}
        target="_blank"
        rel="noopener noreferrer">
        <Box
          className={`${style.wrap} ${style[theme]}`}
          style={{
            background: isDarkMode
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(255, 255, 255, 0.2)',
            boxShadow: isDarkMode
              ? 'rgba(0, 0, 0, 0.2) 0 0 10px 0'
              : 'rgba(33, 35, 38, 0.05) 0 0 10px 0',
          }}>
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
            <Box width={width} height={height} style={cssBlurhash}></Box>
            <Box
              component="img"
              src={image}
              alt={`Screenshot of ${title}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: imgLoaded ? 1 : 0,
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
          <p
            style={{
              padding: '0.75rem',
              fontSize: '1.25rem',
              textAlign: 'center',
            }}>
            {title}
          </p>
        </Box>
      </a>
      <Box display="flex" gap="2.5rem">
        {deploy && (
          <Button
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
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
