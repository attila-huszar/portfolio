import { Box } from '@mui/material'

export function EmojiBullet({ emoji, text, url }) {
  return (
    <Box component="li" display="flex" alignItems="center">
      <Box
        component="span"
        minWidth="45px"
        aria-label="short bio"
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize="2rem"
        textAlign="center">
        {emoji}
      </Box>
      {url ? (
        <a href={url} target={'_blank'} rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </Box>
  )
}
