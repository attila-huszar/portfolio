import { createContext, useEffect, useState } from 'react'
import { fetchData } from '../api/fetch'
import infoFallback from '../assets/info_fallback.json'

export const DataContext = createContext(infoFallback)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetchData()
      .then(info => setData(info))
      .catch(() => setData(infoFallback))
  }, [])

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
