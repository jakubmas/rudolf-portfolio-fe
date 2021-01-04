import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    minHeight: '64px',
    backgroundColor: theme.palette.background.default
  },
  bottomLine: {
    borderTop: '1px solid',
    borderColor: theme.palette.text.primary,
    width: '90%',
    margin: '0 auto',
    borderRadius: '200px'
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footerContainer}>
      <div className={classes.bottomLine} />
      <div></div>
    </footer>
  )
}
