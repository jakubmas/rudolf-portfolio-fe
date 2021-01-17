import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { LayoutContainer, LayoutCenterItem } from '../containers/Layout'
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
    <LayoutContainer breakdownPoint="md">
      <LayoutCenterItem breakdownPoint="md" columnsNumber={5}>
        <SideContentContainer containerEast />
        <LayoutBorder />
      </LayoutCenterItem>
      <LayoutCenterItem breakdownPoint="md" columnsNumber={7}>
        <ImageContainer
          srcImage={aboutMePhoto}
          altImage="About me photography"
          imageClass={classes.aboutPhoto}
        />
      </LayoutCenterItem>
    </LayoutContainer>
  )
}
