import { useContext } from 'react'
import ParticleComponent, { ParticlesProvider } from '@tsparticles/react'
import { ThemeContext } from '../../context/ThemeProvider'
import { loadSlim } from '@tsparticles/slim'
import { createParticlesOptions, particleColors } from './particlesConfig'

const initParticles = async (engine) => {
  await loadSlim(engine)
}

export function Particles() {
  const { isDarkMode } = useContext(ThemeContext)

  const colors = isDarkMode ? particleColors.dark : particleColors.light
  const options = createParticlesOptions(colors)

  return (
    <ParticlesProvider init={initParticles}>
      <ParticleComponent id="tsparticles" options={options} />
    </ParticlesProvider>
  )
}
