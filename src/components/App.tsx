import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/theme'

import Header from './ui/Header'
import Footer from './ui/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
                Elo home
              </div>
            )}
          />
          <Route
            exact
            path="/work"
            component={() => (
              <div style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
                Elo work
              </div>
            )}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <div style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
                Elo about
              </div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <div style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
                Elo contact
              </div>
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
