export const particleColors = {
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

export function createParticlesOptions(colors) {
  return {
    background: {
      color: {
        value: colors.background,
      },
    },
    fpsLimit: 30,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
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
        opacity: 0.5,
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
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 2000,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
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
}
