export async function fetchPortfolioInfo() {
  try {
    const response = await fetch(import.meta.env.VITE_INFO_URL)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error)
  }
}
