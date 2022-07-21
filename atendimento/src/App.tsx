import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Routes/Routers'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
