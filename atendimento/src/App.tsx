import { ThemeProvider } from 'styled-components'
import Button from './components/Button'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="secondary" />
      <Button />
      <Button />
    </ThemeProvider>
  )
}

export default App
