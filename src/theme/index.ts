import { createMuiTheme } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: grey[800],
    },
    background: {
      default: grey[100],
    },
  },
});

export default theme;
