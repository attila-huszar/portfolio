import { useContext, Fragment } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Box } from '@mui/material'
import { Terminal } from './Terminal'
import { PendingFetch } from '../PendingFetch'
import style from './About.module.scss'

export function About() {
  const data = useContext(DataContext)

  const firstName = data?.firstName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const lastName = data?.lastName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  function aboutMeText() {
    if (!data) {
      return <PendingFetch />
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cat about
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            about <span className={style.green}>(main) </span>${' '}
          </span>
          {data.bio}
        </p>
      </>
    )
  }

  function skillsText() {
    if (!data) {
      return <PendingFetch />
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cd skills
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            skills <span className={style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>

        {Object.keys(data.skills).map((skillGroup, i) => {
          return (
            <Fragment key={i}>
              <p style={{ color: data.colorPrimary }}>{skillGroup}</p>
              <ul className={style.skills}>
                {data.skills[skillGroup].map((skill, i) => (
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
    if (!data) {
      return <PendingFetch />
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {firstName}_{lastName} $
          </span>{' '}
          cd hobbies
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            hobbies <span className={style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {data.hobbies.map((hobby, i) => (
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
