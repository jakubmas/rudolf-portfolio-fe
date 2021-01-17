import React, { FunctionComponent } from 'react'

import { LayoutContainer, LayoutCenterContainer } from '../containers/Layout'
import { SideContentContainer } from '../components/ui/SideContentContainer'
import { LayoutBorder } from '../components/ui/LayoutBorder'
import { ImageContainer } from '../components/ui/ImageContainer'

import contactPhoto from '../assets/photos/Contact-photo.png'

export const ContactPage: FunctionComponent = () => {
  return (
    <LayoutContainer>
      <LayoutCenterContainer columnsNumber={7}>
        <ImageContainer
          srcImage={contactPhoto}
          altImage="About me photography"
        />
      </LayoutCenterContainer>
      <LayoutCenterContainer columnsNumber={5}>
        <LayoutBorder />
        <SideContentContainer containerWest iconsSection />
      </LayoutCenterContainer>
    </LayoutContainer>
  )
}
