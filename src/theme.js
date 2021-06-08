import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "principal",
  },
  palette: {
    primary: {
      main: '#d8b8b0',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "1.5em"
      }
    }
  }  
});

export default theme;