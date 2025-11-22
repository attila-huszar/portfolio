import { BrowserRouter } from 'react-router-dom'
import { InfoProvider } from './context/InfoProvider'
import { ThemeProvider } from './context/ThemeProvider'
import { Particles } from './components/particles/Particles'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <ThemeProvider>
          <Particles />
          <Layout />
        </ThemeProvider>
      </InfoProvider>
    </BrowserRouter>
  )
}
