import { useEffect, useState, useContext } from 'react'
import ParticleComponent, { initParticlesEngine } from '@tsparticles/react'
import { ThemeContext } from '../../context/ThemeProvider'
import { loadSlim } from '@tsparticles/slim'

const colors = {
  light: {
    background: '#DCD6C8',
    particles: '#5C7C8A',
    lines: '#E7B669',
  },
  dark: {
    background: '#0d2538',
    particles: '#c678dd',
    lines: '#98c379',
  },
}

export function Particles() {
  const { isDarkMode } = useContext(ThemeContext)
  const [colorsRef, setColorsRef] = useState(
    isDarkMode ? colors.dark : colors.light,
  )

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setColorsRef(isDarkMode ? colors.dark : colors.light)
    })
  }, [isDarkMode])

  const options = {
    background: {
      color: {
        value: colorsRef.background,
      },
    },
    fpsLimit: 60,
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
        value: colorsRef.particles,
      },
      links: {
        color: colorsRef.lines,
        distance: 150,
        enable: true,
        opacity: 0.7,
        width: 2,
        triangles: {
          enable: true,
          color: colorsRef.lines,
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
  }

  return <ParticleComponent id="tsparticles" options={options} />
}
