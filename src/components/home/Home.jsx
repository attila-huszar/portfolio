import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { ThemeContext } from '../../context/ThemeProvider'
import { Box } from '@mui/material'
import selfPortrait from '../../assets/Attila_Huszar_pic_sm-nobg.webp'
import selfPortraitFallBack from '../../assets/Attila_Huszar_pic_sm-nobg.png'
import { EmojiBullet } from './EmojiBullet'
import { SocialIcon } from './SocialIcon'
import { PendingFetch } from '../PendingFetch'
import style from './Home.module.scss'

export function Home() {
  const data = useContext(DataContext)
  const { isDarkMode } = useContext(ThemeContext)

  if (!data) {
    return <PendingFetch />
  }

  return (
    <Box
      component="section"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      mt="100px">
      <Box
        className={style.shadowed}
        component="img"
        fetchpriority="high"
        src={selfPortrait}
        onError={(e) => (e.currentTarget.src = selfPortraitFallBack)}
        alt="developer portrait"
        style={{
          background: isDarkMode
            ? data.gradientPrimary
            : data.gradientSecondary,
          borderRadius: '50%',
          padding: '0.1rem',
          objectFit: 'cover',
        }}
        width={{ xs: '320px', md: '375px' }}
        height={{ xs: '320px', md: '375px' }}
        mr={{ xs: 0, md: '50px' }}
        mb={{ xs: '50px', md: 0 }}
      />
      <Box
        style={{
          borderRadius: '1rem',
          background: isDarkMode
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isDarkMode
            ? 'rgba(0, 0, 0, 0.2) 0 0 10px 0'
            : 'rgba(33, 35, 38, 0.05) 0 0 10px 0',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '1rem 2rem',
          cursor: 'default',
        }}>
        <h1>
          Hi, I&apos;m{' '}
          <span
            style={{
              background: data.gradientPrimary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            {data.firstName}
          </span>
          <span className={style.hand}>🤚</span>
        </h1>
        <h2>I&apos;m {data.position}</h2>
        <Box component="ul" p="0.8rem">
          {data.miniBio.map((bio, i) => (
            <EmojiBullet
              key={i}
              emoji={bio.emoji}
              text={bio.text}
              url={bio.url}
            />
          ))}
        </Box>
        <Box
          display="flex"
          gap="2rem"
          justifyContent="center"
          fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {data.socials.map((social, i) => (
            <SocialIcon
              key={i}
              label={social.label}
              link={social.link}
              svgPath={social.svgPath}
              viewBox={social.viewBox}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
