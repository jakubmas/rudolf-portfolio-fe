import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { LayoutContainer, LayoutCenterContainer } from '../containers/Layout'
import { SideContentContainer } from '../components/ui/SideContentContainer'
import { LayoutBorder } from '../components/ui/LayoutBorder'
import { ImageContainer } from '../components/ui/ImageContainer'

import aboutMePhoto from '../assets/photos/AboutMe-photo.png'

const useStyles = makeStyles((theme: Theme) => ({
  aboutPhoto: {
    maxWidth: '60%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  }
}))

export const About: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <LayoutContainer>
      <LayoutCenterContainer columnsNumber={5}>
        <SideContentContainer containerEast />
        <LayoutBorder />
      </LayoutCenterContainer>
      <LayoutCenterContainer columnsNumber={7}>
        <ImageContainer
          srcImage={aboutMePhoto}
          altImage="About me photography"
          imageClass={classes.aboutPhoto}
        />
      </LayoutCenterContainer>
    </LayoutContainer>
  )
}
