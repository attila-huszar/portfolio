import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataProvider'
import { ThemeProvider } from './context/ThemeProvider'
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
