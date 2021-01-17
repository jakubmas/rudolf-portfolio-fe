import React, { FunctionComponent } from 'react'

import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { LayoutContainer } from '../containers/Layout'
import { WorkCard } from '../components/ui/WorkCard/WorkCard'

const useStyles = makeStyles((theme: Theme) => ({
  layoutContainer: {
    marginTop: '7rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  }
}))

export const Work: FunctionComponent = () => {
  const DummyArr = [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false
  ]
  const classes = useStyles()
  return (
    <LayoutContainer breakdownPoint="sm" layoutClass={classes.layoutContainer}>
      {DummyArr.map((el, i) => (
        <WorkCard testPhoto={el} key={Math.random()} index={i} />
      ))}
    </LayoutContainer>
  )
}
