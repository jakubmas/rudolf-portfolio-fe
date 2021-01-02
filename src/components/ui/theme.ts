import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

const palette = {
  primary: { main: '#ededed' },
  secondary: { main: '#7cc78d' },
  error: {main: '#c93131'},
  text: {primary: '#707070'},
  background: {default: '#ededed'},
  success: {main: '#7cb3c7'}
};

const typography= {
  fontFamily: [
    "Lato",
    "Montserrat",
    "Work Sans",
    "serif"
  ].join(","),
  allVariants: {
    color: '#707070'
  },
}

const themeName = 'San Marino Razzmatazz Sugar Gliders';

export default createMuiTheme({ palette, typography, themeName });