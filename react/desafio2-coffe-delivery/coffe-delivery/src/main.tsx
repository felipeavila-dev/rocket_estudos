import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { ContextProvider } from './contexts/Context'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './router'
import {light} from './theme/light'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ light }>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
