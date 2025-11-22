import { useContext, Fragment } from 'react'
import { InfoContext } from '../../context/InfoProvider'
import { Box } from '@mui/material'
import { Terminal } from './Terminal'
import { PendingFetch } from '../PendingFetch'
import { getNormalizedName } from '../../helpers/getNormalizedName'
import style from './About.module.scss'

export function About() {
  const info = useContext(InfoContext)

  function aboutMeText() {
    if (!info) {
      return <PendingFetch />
    }

    const firstName = getNormalizedName(info.firstName)
    const lastName = getNormalizedName(info.lastName)

    return (
      <>
        <p>
          <span style={{ color: info.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cat about
        </p>
        <p>
          <span style={{ color: info.colorPrimary }}>
            about <span className={style.green}>(main) </span>${' '}
          </span>
          {info.bio}
        </p>
      </>
    )
  }

  function skillsText() {
    if (!info) {
      return <PendingFetch />
    }

    const firstName = getNormalizedName(info.firstName)
    const lastName = getNormalizedName(info.lastName)

    return (
      <>
        <p>
          <span style={{ color: info.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cd skills
        </p>
        <p>
          <span style={{ color: info.colorPrimary }}>
            skills <span className={style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>

        {Object.keys(info.skills).map((skillGroup, i) => {
          return (
            <Fragment key={i}>
              <p style={{ color: info.colorPrimary }}>{skillGroup}</p>
              <ul className={style.skills}>
                {info.skills[skillGroup].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </Fragment>
          )
        })}
      </>
    )
  }

  function miscText() {
    if (!info) {
      return <PendingFetch />
    }

    const firstName = getNormalizedName(info.firstName)
    const lastName = getNormalizedName(info.lastName)

    return (
      <>
        <p>
          <span style={{ color: info.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cd hobbies
        </p>
        <p>
          <span style={{ color: info.colorPrimary }}>
            hobbies <span className={style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, i) => (
            <li key={i}>
              {hobby.emoji} {hobby.label}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="3rem">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  )
}
