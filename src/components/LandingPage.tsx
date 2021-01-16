import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SideContentContainer from './ui/SideContentContainer'

import landingPagePhoto from '../assets/photos/LandingPage-photo.png'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: 'calc(100vh - 64px - 64px)',
    padding: '0 5%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  rotatedLogo: {
    fontSize: '2.5rem',
    transform: 'rotate(-90deg)',
    height: 'fit-content',
    letterSpacing: '1.2rem'
  },
  mediumLogo: {
    fontSize: '4.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2rem'
    }
  },
  centerContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: '2rem 2rem'
  },
  photoContainer: {
    width: '100%'
  }
}))

export default function LandingPage() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      container
      direction={matchesMedium ? 'column' : 'row'}
      className={classes.container}
    >
      <Grid
        item
        md={matchesMedium ? 12 : 4}
        className={classes.centerContentContainer}
      >
        <Typography
          variant="h2"
          component="h2"
          className={matchesMedium ? classes.mediumLogo : classes.rotatedLogo}
        >
          RUDOLF
          <br />
          MASLOWSKI
        </Typography>
      </Grid>
      <Grid
        item
        md={matchesMedium ? 12 : 4}
        className={classes.centerContentContainer}
      >
        <img
          className={classes.photoContainer}
          src={landingPagePhoto}
          alt="Landing Page photography"
        />
      </Grid>
      <Grid
        item
        md={matchesMedium ? 12 : 4}
        className={classes.centerContentContainer}
      >
        <SideContentContainer />
      </Grid>
    </Grid>
  )
}
