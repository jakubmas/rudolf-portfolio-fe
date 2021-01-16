import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SideContentContainer from './ui/SideContentContainer'

import aboutMePhoto from '../assets/photos/AboutMe-photo.png'

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
  centerContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: '2rem 2rem'
  },
  photoContainer: {
    maxWidth: '60%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  },
  contentBorder: {
    height: '100%',
    borderRight: `1px solid ${theme.palette.text.primary}`
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
        md={matchesMedium ? 12 : 5}
        className={classes.centerContentContainer}
      >
        <SideContentContainer containerEast />
        <Grid item className={classes.contentBorder} />
      </Grid>
      <Grid
        item
        md={matchesMedium ? 12 : 7}
        className={classes.centerContentContainer}
      >
        <img
          className={classes.photoContainer}
          src={aboutMePhoto}
          alt="About me photography"
        />
      </Grid>
    </Grid>
  )
}
