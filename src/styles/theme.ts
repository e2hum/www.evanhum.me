import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#161a3f',
    },
    text: {
      primary: '#CCCCFF',
    },
  },
  typography: {
    fontFamily: "'VT323', monospace",
  },
});

export default theme;
