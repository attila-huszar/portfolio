export const particleBgColors = () => {
  const background = (darkMode = false) => (darkMode ? '#0d2538' : '#DCD6C8')
  const particle = (darkMode = false) => (darkMode ? '#c678dd' : '#5C7C8A')
  const links = (darkMode = false) => (darkMode ? '#98c379' : '#E7B669')

  return {
    background,
    particle,
    links,
  }
}
