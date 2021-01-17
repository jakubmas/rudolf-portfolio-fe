import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { LayoutContainer, LayoutCenterContainer } from '../containers/Layout'
import { SideContentContainer } from '../components/ui/SideContentContainer'
import { ImageContainer } from '../components/ui/ImageContainer'

import landingPagePhoto from '../assets/photos/LandingPage-photo.png'

const useStyles = makeStyles((theme: Theme) => ({
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
  }
}))

export const LandingPage: FunctionComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <LayoutContainer>
      <LayoutCenterContainer columnsNumber={4}>
        <Typography
          variant="h2"
          component="h2"
          className={matchesMedium ? classes.mediumLogo : classes.rotatedLogo}
        >
          RUDOLF
          <br />
          MASLOWSKI
        </Typography>
      </LayoutCenterContainer>
      <LayoutCenterContainer columnsNumber={4}>
        <ImageContainer
          srcImage={landingPagePhoto}
          altImage="Landing Page photography"
        />
      </LayoutCenterContainer>
      <LayoutCenterContainer columnsNumber={4}>
        <SideContentContainer />
      </LayoutCenterContainer>
    </LayoutContainer>
  )
}
