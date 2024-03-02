import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataProvider'
import { ThemeProvider } from './context/ThemeProvider'
import { Particles } from './components/particles/Particles'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <ThemeProvider>
          <Particles />
          <Layout />
        </ThemeProvider>
      </DataProvider>
    </BrowserRouter>
  )
}
