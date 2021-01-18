import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Grid } from '@material-ui/core'

import { LayoutContainer, LayoutCenterItem } from '../containers/Layout'
import { SideContentContainer } from '../components/ui/SideContentContainer'
import { LayoutBorder } from '../components/ui/LayoutBorder'

import { ImageWork } from '../components/ui/ImageWork'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    minWidth: '12.7rem',
    height: '18rem',
    margin: '0.7rem'
  },
  cardContainer: {
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      maxHeight: '80vh',
      overflow: 'scroll'
    }
  },
  media: {
    height: '100%'
  }
}))

export const WorkDetail: FunctionComponent = () => {
  const classes = useStyles()

  const test = ['', '', '', '', '', '', '', '', '', '', '', '']

  return (
    <LayoutContainer breakdownPoint="md">
      <LayoutCenterItem breakdownPoint="md" columnsNumber={4}>
        <SideContentContainer containerEast iconsSection />
        <LayoutBorder />
      </LayoutCenterItem>
      <LayoutCenterItem breakdownPoint="md" columnsNumber={8}>
        <Grid container sm className={classes.cardContainer}>
          {test.map(() => (
            <ImageWork key={Math.random()} />
          ))}
        </Grid>
      </LayoutCenterItem>
    </LayoutContainer>
  )
}
