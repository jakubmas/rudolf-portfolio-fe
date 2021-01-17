import React, { FunctionComponent } from 'react'

import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Grid, GridSize } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: 'calc(100vh - 64px - 64px)',
    padding: '0 5%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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

export const LayoutContainer: FunctionComponent = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid
      container
      direction={matchesMedium ? 'column' : 'row'}
      className={classes.container}
    >
      {children}
    </Grid>
  )
}

type LayoutCenterContainerProps = {
  columnsNumber: GridSize
}

export const LayoutCenterContainer: FunctionComponent<LayoutCenterContainerProps> = ({
  columnsNumber,
  children
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMedium = useMediaQuery(theme.breakpoints.down('md'))
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
