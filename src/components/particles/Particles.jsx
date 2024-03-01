import { useEffect, useState } from 'react'
import ParticleComponent, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export function Particles({ darkMode }) {
  const [init, setInit] = useState(false)

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
  }[darkMode ? 'dark' : 'light']

  const options = {
    background: {
      color: {
        value: colors.background,
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
        value: colors.particles,
      },
      links: {
        color: colors.lines,
        distance: 150,
        enable: true,
        opacity: 0.7,
        width: 2,
        triangles: {
          enable: true,
          color: colors.lines,
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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (init) {
    return <ParticleComponent id="tsparticles" options={options} />
  }

  return <></>
}
