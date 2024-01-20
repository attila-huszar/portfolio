import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useDarkMode } from 'usehooks-ts'
import { fetchData } from '../api/fetch'
import Layout from './Layout'
import infoFallback from '../assets/info_fallback.json'

export const DataContext = createContext(infoFallback)
const info = await fetchData()

export default function App() {
  const { isDarkMode } = useDarkMode()
  const [data, setData] = useState()

  useEffect(() => {
    if (info instanceof Error || !info) {
      setData(infoFallback)
    } else {
      setData(info)
    }
  }, [])

  const light = {
    palette: {
      mode: 'light',
    },
  }

  const dark = {
    palette: {
      mode: 'dark',
    },
  }

  return (
    <ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </DataContext.Provider>
    </ThemeProvider>
  )
}
