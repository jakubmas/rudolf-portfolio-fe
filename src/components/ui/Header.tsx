import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em'
    },
    headerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0
    },
    toolbarContainer: {
      marginLeft: '10%',
      marginRight: '10%',
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-evenly'
      }
    },
    logo: {
      fontSize: '12px',
      lineHeight: '1'
    },
    tabsContainer: {
      width: '100%'
    },
    tab: {
      textTransform: 'none',
      fontSize: '1rem',
      minWidth: 10
    },
    languageToggler: {
      fontSize: '12px'
    },
    bottomLine: {
      border: '1px solid #707070',
      width: '90%',
      margin: '0 auto',
      borderRadius: '200px'
    }
  }
})

export default function ElevateAppBar() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <AppBar
        position="static"
        elevation={0}
        className={classes.headerContainer}
      >
        <Toolbar disableGutters className={classes.toolbarContainer}>
          <div>
            <Typography component="p" className={classes.logo}>
              Rudolf
            </Typography>
            <Typography component="p" className={classes.logo}>
              Maslowski
            </Typography>
          </div>
          <Tabs className={classes.tabsContainer}>
            <Tab className={classes.tab} label="Work" />
            <Tab className={classes.tab} label="About" />
            <Tab className={classes.tab} label="Contact" />
          </Tabs>
          <Typography component="p" className={classes.languageToggler}>
            PL/<strong>EN</strong>
          </Typography>
        </Toolbar>
        <div className={classes.bottomLine} />
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}
