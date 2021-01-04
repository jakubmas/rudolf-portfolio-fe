import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/theme'

import Header from './ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Elo home</div>} />
          <Route exact path="/work" component={() => <div>Elo work</div>} />
          <Route exact path="/about" component={() => <div>Elo about</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Elo contact</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
