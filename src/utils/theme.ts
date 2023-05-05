import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        iconLight: string;
        iconDark: string;
        caption: string;
    }
}

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {                                                                                                                                                      
            main: '#FE645E',
            dark: '#e45a54',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#5C5C5C',
            secondary: '#000000',
            iconLight: '#6E7278',
            iconDark: '#292D32',
            caption: '#494949',
        }
    },
});

theme = createTheme(theme, {
    typography: {
        fontFamily: 'Work Sans',
        fontWeightRegular: 300,                         
        fontSize: 15,
        h2: {
            fontSize: 45,
            fontWeightRegular: 500,
        },
        h3: {
            fontSize: 30,
            fontWeightRegular: 500,
        },
        h4: {
            fontSize: 25,
            fontWeightRegular: 500,
        },
        h5: {
            fontSize: 20,
            fontWeightRegular: 500,
        },
        h6: {
            fontSize: 16,
            fontWeightRegular: 500,
        },
        body1: {
            color: theme.palette.text.primary,
        },
        body2: {
            color: theme.palette.text.primary,
        },
        caption: {
            color: theme.palette.text.caption,
            fontWeightRegular: 500,
            fontSize: 15
        },
        subtitle1: {
            fontSize: 22,
            fontWeightRegular: 500,
        },
        subtitle2: {
            fontSize: 18,
            fontWeightRegular: 500,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeightRegular: 500,
                    borderRadius: 8,
                    textTransform: 'none',
                    padding: 9,
                }
            }
        }, 
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: theme.palette.text.caption,
                },
                input: {
                    '&::placeholder': {
                        color: theme.palette.text.primary,
                    },
                },
            }
        }, 
    }
});

export default theme;
