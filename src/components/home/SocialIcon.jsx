import Tooltip from '@mui/material/Tooltip'

export function SocialIcon({ label, link, svgPath, viewBox }) {
  return (
    <Tooltip title={label} arrow>
      <a
        target={'_blank'}
        aria-label={label}
        rel="noopener noreferrer"
        href={link}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox={viewBox}>
          <path fill="currentColor" d={svgPath} />
        </svg>
      </a>
    </Tooltip>
  )
}
