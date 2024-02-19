import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
//import { loadBasic } from "@tsparticles/basic";
import { particleBgColors } from './particleBgColors'

export function ParticlesBg({ darkMode }) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const { background, links, particle } = particleBgColors()
  const [backgroundColor, setBgColor] = useState(background(darkMode))
  const [particleColor, setParticleColor] = useState(particle(darkMode))
  const [linksColor, setLinksColor] = useState(links(darkMode))

  useEffect(() => {
    setBgColor(background(darkMode))
    setParticleColor(particle(darkMode))
    setLinksColor(links(darkMode))
  }, [darkMode])

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: backgroundColor,
              },
            },
            fpsLimit: 60,
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            interactivity: {
              detectsOn: 'window',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: linksColor,
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 2,
                triangles: {
                  enable: true,
                  color: linksColor,
                  opacity: 0.2,
                },
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 2000,
                },
                value: 80,
              },
              opacity: {
                value: 0.9,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: { min: 3, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  )
}
