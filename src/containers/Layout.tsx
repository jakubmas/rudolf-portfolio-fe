import React, { FunctionComponent } from 'react'

import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Grid, GridSize } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: 'calc(100vh - 64px - 64px)',
    padding: '0 5%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2rem'
    }
  },
  centerContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: '2rem 2rem'
  }
}))

type LayoutContainerProps = {
  breakdownPoint: Breakpoint
  layoutClass?: string
}

export const LayoutContainer: FunctionComponent<LayoutContainerProps> = ({
  breakdownPoint,
  layoutClass,
  children
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down(breakdownPoint))
  return (
    <Grid
      container
      direction={matchesMedium ? 'column' : 'row'}
      className={`${classes.container} ${layoutClass && layoutClass}`}
    >
      {children}
    </Grid>
  )
}

type LayoutCenterItemProps = {
  columnsNumber: GridSize
  breakdownPoint: Breakpoint
}

export const LayoutCenterItem: FunctionComponent<LayoutCenterItemProps> = ({
  columnsNumber,
  breakdownPoint,
  children
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down(breakdownPoint))

  return (
    <Grid
      item
      md={matchesMedium ? 12 : columnsNumber}
      className={classes.centerContentContainer}
    >
      {children}
    </Grid>
  )
}
