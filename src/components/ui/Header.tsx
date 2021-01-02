import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

interface Tab {
  to: string
  label: string
  active: boolean
}

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
      fontSize: '0.7rem',
      lineHeight: '1'
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    tab: {
      textTransform: 'none',
      fontSize: '1rem',
      minWidth: 10
    },
    languageToggler: {
      fontSize: '0.7rem'
    },
    bottomLine: {
      border: '1px solid #707070',
      width: '90%',
      margin: '0 auto',
      borderRadius: '200px'
    },
    tabsContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    tabActive: {
      border: '1px solid #707070',
      width: '120%'
    },
    tabDisactive: {
      border: '1px solid transparent',
      width: '120%'
    },
    tabButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }
})

export default function Header() {
  const classes = useStyles()
  const [tab, setTab] = useState<Tab[]>([
    {
      to: '/work',
      label: 'Work',
      active: false
    },
    {
      to: '/contact',
      label: 'Contact',
      active: false
    },
    {
      to: '/about',
      label: 'About',
      active: false
    }
  ])

  const handleChange = (index: number, activeTab: Tab) => {
    let newArray = [...tab]
    newArray.forEach((element) => {
      element.active = false
    })
    newArray[index] = { ...activeTab, active: true }
    setTab(newArray)
  }

  useEffect(() => {
    console.log(window.location.pathname)
    let newArray = [...tab]
    newArray.forEach((element) => {
      if (element.to === window.location.pathname) element.active = true
    })
    setTab(newArray)
  }, [])

  const renderTabs = (tabs: Tab[]) => {
    return tabs.map((tab, i) => (
      <div className={classes.tabButtonContainer} key={tab.label}>
        <Button
          className={classes.tab}
          component={Link}
          to={tab.to}
          disableRipple
          onClick={() => handleChange(i, tab)}
        >
          {tab.label}
        </Button>
        {
          <div
            className={tab.active ? classes.tabActive : classes.tabDisactive}
          />
        }
      </div>
    ))
  }

  return (
    <React.Fragment>
      <AppBar
        position="static"
        elevation={0}
        className={classes.headerContainer}
      >
        <Toolbar disableGutters className={classes.toolbarContainer}>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() =>
              handleChange(-1, {
                to: '/',
                label: '',
                active: false
              })
            }
          >
            <Typography component="p" className={classes.logo}>
              Rudolf
              <br />
              Maslowski
            </Typography>
          </Button>
          <div className={classes.tabsContainer}>{renderTabs(tab)}</div>
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
