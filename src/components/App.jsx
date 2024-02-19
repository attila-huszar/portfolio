import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import { fetchData } from '../api/fetch'
import { ThemeProvider } from '../context/ThemeContext'
import { Layout } from './Layout'
import infoFallback from '../assets/info_fallback.json'

export const DataContext = createContext(infoFallback)

export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetchData()
      .then(info => setData(info))
      .catch(() => setData(infoFallback))
  }, [])

  return (
    <DataContext.Provider value={data}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </DataContext.Provider>
  )
}
