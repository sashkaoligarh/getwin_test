import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover': {
            borderColor: '#5781f5',
          },
          paddingRight: '54px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderColor: '#5781f5',
          },
          '.MuiOutlinedInput-notchedOutline:hover': {
            borderColor: '#5781f5 !important',
          },
        },
      },
    },
  },
  // typography: {
  //   h1: {
  //     fontSize: '22px',
  //   },
  // },
  palette: {
    primary: {
      main: '#5781f5',
    },
  },
  spacing: 8,
});

export default defaultTheme;
