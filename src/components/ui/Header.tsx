import React, { useState, useEffect, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

interface Tab {
  to: string
  label: string
  active: boolean
}

// TODO Refactor Header component to smaller pieces

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
      marginLeft: '5%',
      marginRight: '5%',
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-evenly'
      }
    },
    logo: {
      fontSize: '0.7rem',
      lineHeight: '1'
    },
    logoContainer: {
      marginLeft: '2rem',
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
      marginRight: '2rem',
      fontSize: '0.7rem'
    },
    bottomLine: {
      borderTop: '1px solid',
      borderColor: theme.palette.text.primary,
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
      borderTop: '1px solid',
      borderColor: theme.palette.text.primary,
      width: '120%'
    },
    tabInactive: {
      border: '1px solid transparent',
      width: '120%'
    },
    tabButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    drawer: {
      backgroundColor: theme.palette.background.default,
      width: '30vw',
      [theme.breakpoints.down('xs')]: {
        width: '100vw'
      }
    },
    drawerItem: {
      ...theme.typography,
      display: 'flex',
      paddingBottom: '1.2rem',
      justifyContent: 'center',
      fontSize: '1.2rem',
      fontWeight: 300,
      [theme.breakpoints.down('xs')]: {
        width: '100vw',
        fontSize: '2rem'
      }
    },
    drawerListContainer: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    drawerLogoContainer: {
      justifyContent: 'center',
      '& .MuiTypography-root': {
        padding: '1rem',
        fontSize: '1.1rem',
        fontWeight: 300
      },
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '& .MuiTypography-root': {
          fontSize: '1.5rem',
          fontWeight: 300
        }
      }
    },
    menuButton: {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawerCloseButton: {
      alignSelf: 'start',
      paddingBottom: '5vh',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawerLanguageToggler: {
      marginBottom: '10vh',
      justifyContent: 'center',
      '& .MuiTypography-root': {
        fontSize: '1.1rem',
        fontWeight: 300
      }
    }
  }
})

export const Header: FunctionComponent = () => {
  const theme = useTheme()
  const classes = useStyles()

  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matchesSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesExtraSmall = useMediaQuery(theme.breakpoints.down('xs'))

  const [tabs, setTabs] = useState<Tab[]>([
    {
      to: '/work',
      label: 'Work',
      active: false
    },
    {
      to: '/about',
      label: 'About',
      active: false
    },
    {
      to: '/contact',
      label: 'Contact',
      active: false
    }
  ])
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (index: number, activeTab: Tab) => {
    let newArray = [...tabs]
    newArray.forEach((element) => {
      element.active = false
    })
    newArray[index] = { ...activeTab, active: true }
    setTabs(newArray)
  }

  const handleDisacitveTabs = () => {
    let newArray = [...tabs]
    newArray.forEach((element) => {
      element.active = false
    })
    setTabs(newArray)
  }

  useEffect(() => {
    let newArray = [...tabs]
    newArray.forEach((element) => {
      if (element.to === window.location.pathname) element.active = true
    })
    setTabs(newArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!matchesSmall && !matchesExtraSmall) {
      setOpenDrawer(false)
    }
  }, [matchesExtraSmall, matchesSmall])

  const renderTabs = () => {
    return tabs.map((tab, i) => (
      <div className={classes.tabButtonContainer} key={tab.label}>
        <Button
          disableRipple
          className={classes.tab}
          component={Link}
          to={tab.to}
          onClick={() => handleChange(i, tab)}
        >
          {tab.label}
        </Button>
        {
          <div
            className={tab.active ? classes.tabActive : classes.tabInactive}
          />
        }
      </div>
    ))
  }

  const logoButton = (
    <Button
      disableRipple
      component={Link}
      to="/"
      className={classes.logoContainer}
      onClick={() => {
        handleDisacitveTabs()
        setOpenDrawer(false)
      }}
    >
      <Typography component="p" className={classes.logo}>
        Rudolf
        <br />
        Maslowski
      </Typography>
    </Button>
  )

  const languageToggler = (
    <Typography component="p" className={classes.languageToggler}>
      PL/<strong>EN</strong>
    </Typography>
  )

  const largeHeader = (
    <>
      {logoButton}
      <div className={classes.tabsContainer}>{renderTabs()}</div>
      {languageToggler}
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer
        }}
      >
        <div>
          <List disablePadding className={classes.drawerListContainer}>
            <ListItem className={classes.drawerLogoContainer}>
              {matchesExtraSmall && (
                <IconButton
                  className={classes.drawerCloseButton}
                  onClick={() => setOpenDrawer(false)}
                  disableRipple
                >
                  <CloseIcon />
                </IconButton>
              )}
              {logoButton}
            </ListItem>
            <div>
              {tabs.map((tab, i) => (
                <ListItem
                  key={`${tab}${i}`}
                  button
                  component={Link}
                  to={tab.to}
                  selected={tab.active}
                  onClick={() => {
                    setOpenDrawer(false)
                    handleChange(i, tab)
                  }}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                  >
                    {tab.label}
                  </ListItemText>
                </ListItem>
              ))}
            </div>
            <ListItem className={classes.drawerLanguageToggler}>
              {languageToggler}
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <IconButton
        className={classes.menuButton}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
      {logoButton}
    </>
  )

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        className={classes.headerContainer}
      >
        <Toolbar disableGutters className={classes.toolbarContainer}>
          {matchesSmall ? drawer : largeHeader}
        </Toolbar>
        {!matchesExtraSmall && <div className={classes.bottomLine} />}
      </AppBar>
      <Toolbar />
    </>
  )
}
