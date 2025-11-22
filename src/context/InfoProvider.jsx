import { createContext, use } from 'react'
import { fetchPortfolioInfo } from '../api/fetchPortfolioInfo'
import infoFallback from '../assets/info_fallback.json'

export const InfoContext = createContext(infoFallback)

const portfolioInfoPromise = fetchPortfolioInfo().catch(() => infoFallback)

export const InfoProvider = ({ children }) => {
  const info = use(portfolioInfoPromise)

  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>
}
