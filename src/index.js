import React from 'react'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'
import { store, persistor } from '@/store'
import GlobalStyles from '@/globalStyles'

const Root = () => {
  const theme = useSelector((state) => state.theme.themes)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Application />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
)
