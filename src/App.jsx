import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataProvider'
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  )
}
