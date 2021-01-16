import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      overflow: 'scroll',
      maxHeight: '70vh'
    },
    title: {
      fontSize: '1.2rem',
      lineHeight: '1.7rem',
      fontWeight: 100,
      marginBottom: '3rem',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
        textAlign: 'center'
      }
    },
    textRegular: {
      fontSize: '0.8rem',
      lineHeight: '1.7rem',
      fontWeight: 100,
      marginRight: '3rem',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        margin: 0
      }
    }
  }
})

// [
//   {
//     type: 'title',
//     text: 'asdhahdoiaho'
//   },
//   {
//     type: 'paragraph',
//     text: 'loremIpsum'
//   },
//   {
//     type: 'credentials',
//     items: [
//       {
//         icon: 'instagram',
//         text: 'ktos',
//         url: 'http://blablablabla.pl'
//       },
//       {
//         icon: 'instagram',
//         text: 'ktos',
//         url: 'http://blablablabla.pl'
//       },
//       {
//         icon: 'instagram',
//         text: 'ktos',
//         url: 'http://blablablabla.pl'
//       },
//     ]
//   }
// ]

export default function SideContentContainer() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography component="h2" className={classes.title}>
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography component="p" className={classes.textRegular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt mauris at bibendum pellentesque. Praesent lobortis varius
        congue. In et nunc et elit ullamcorper aliquam eu sit amet nulla. Nunc
        tempor mi quis leo interdum suscipit at in lorem. Pellentesque tristique
        auctor erat, nec aliquet nisi lobortis eget. Duis ultrices pulvinar
        nunc. Nulla lorem nunc, facilisis at arcu sit amet, aliquet luctus
        felis.
      </Typography>
      {/* <Typography component="p" className={classes.textRegular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt mauris at bibendum pellentesque. Praesent lobortis varius
        congue. In et nunc et elit ullamcorper aliquam eu sit amet nulla. Nunc
        tempor mi quis leo interdum suscipit at in lorem. Pellentesque tristique
        auctor erat, nec aliquet nisi lobortis eget. Duis ultrices pulvinar
        nunc. Nulla lorem nunc, facilisis at arcu sit amet, aliquet luctus
        felis.
      </Typography>
      <Typography component="p" className={classes.textRegular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt mauris at bibendum pellentesque. Praesent lobortis varius
        congue. In et nunc et elit ullamcorper aliquam eu sit amet nulla. Nunc
        tempor mi quis leo interdum suscipit at in lorem. Pellentesque tristique
        auctor erat, nec aliquet nisi lobortis eget. Duis ultrices pulvinar
        nunc. Nulla lorem nunc, facilisis at arcu sit amet, aliquet luctus
        felis.
      </Typography>
      <Typography component="p" className={classes.textRegular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        tincidunt mauris at bibendum pellentesque. Praesent lobortis varius
        congue. In et nunc et elit ullamcorper aliquam eu sit amet nulla. Nunc
        tempor mi quis leo interdum suscipit at in lorem. Pellentesque tristique
        auctor erat, nec aliquet nisi lobortis eget. Duis ultrices pulvinar
        nunc. Nulla lorem nunc, facilisis at arcu sit amet, aliquet luctus
        felis.
      </Typography> */}
    </Grid>
  )
}
