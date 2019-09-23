import React from 'react'
import MainsScreen from './components/screens/MainScreen/MainScreen'
import theme from './Theme'
import { ThemeProvider } from '@material-ui/styles'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <MainsScreen />
    </ThemeProvider>

  )
}

export default App
