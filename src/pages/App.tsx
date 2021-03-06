import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from '../components/ui/theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Header } from '../components/ui/Header'
import { Footer } from '../components/ui/Footer'
import { LandingPage } from './LandingPage'
import { About } from './About'
import { Work } from './Work'
import { WorkDetail } from './WorkDetail'
import { ContactPage } from './ContactPage'

function App() {
  const matchesSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/work" render={() => <Work />} />
          <Route exact path="/work/session/:id" render={() => <WorkDetail />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
        </Switch>
        {!matchesSmall && <Footer />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
