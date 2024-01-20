const INFO_URL =
  'https://s3.eu-central-1.amazonaws.com/attila.huszar/portfolio/info.json'

export async function fetchData() {
  try {
    const response = await fetch(INFO_URL)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error)
  }
}
