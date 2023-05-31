import { createTheme } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#FE645E',
      dark: '#e45a54',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#5C5C5C',
      secondary: '#000000',
      iconLight: '#6E7278',
      iconDark: '#292D32',
      caption: '#494949',
      selection: 'rgb(254, 131, 126, 0.4)',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h2: {
      fontSize: 45,
      fontWeight: 500,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 30,
      },
    },
    h3: {
      fontSize: 30,
      fontWeight: 500,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
    h4: {
      fontSize: 25,
      fontWeight: 500,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 20,
      },
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 8,
      },
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontSize: 15,
      fontWeight: 300,
      color: theme.palette.text.primary,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
    body2: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.palette.text.primary,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontWeight: 300,
      },
    },
    caption: {
      color: theme.palette.text.caption,
      fontWeight: 500,
      fontSize: 15,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 500,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 10,
      },
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500,
      color: theme.palette.text.primary,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 9,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 8,
          textTransform: 'none',
          padding: 9,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: 15,
          fontWeight: 300,
          color: theme.palette.text.caption,
        },
        notchedOutline: {
          borderColor: theme.palette.text.caption,
          borderRadius: 8,
        },
        input: {
          '&::placeholder': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: 15,
          fontWeight: 300,
          color: theme.palette.text.caption,
        },
        notchedOutline: {
          borderColor: theme.palette.text.caption,
          borderRadius: 8,
        },
        input: {
          '&::placeholder': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          '&::selection': {
              backgroundColor: theme.palette.text.selection,
          }
        },
      },
      defaultProps: {
        variantMapping: {
          h3Bold: 'h3',
          h3Thin: 'h3',
          h4Warning: 'h4',
          h4Thin: 'h4',
          h4Bold: 'h4',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.text.caption,
          padding: '0px 1px 1px 10px',
          '.MuiSvgIcon-root': {
            fontSize: '1rem',
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    ...theme.typography,
    h3Thin: {
      ...theme.typography.h3,
      fontWeight: 400,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 20,
      },
    },
    h3Bold: {
      ...theme.typography.h3,
      fontWeight: 600,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
    h4Warning: {
      ...theme.typography.h4,
      fontWeight: 600,
      color: theme.palette.primary.main,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
    h4Thin: {
      ...theme.typography.h4,
      fontWeight: 400,
    },
    h4Bold: {
      ...theme.typography.h4,
      fontWeight: 600,
    },
    h5Gray: {
      ...theme.typography.h5,
      color: theme.palette.text.primary,
    },
    subtitle2Thin: {
      ...theme.typography.subtitle2,
      fontWeight: 400,
    },
    subtitle2Small: {
      ...theme.typography.subtitle2,
      fontSize: 16,
    },
    btnIconText: {
      fontWeight: 400,
      fontSize: 24,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 12,
      },
    },
  },
});

export default theme;
