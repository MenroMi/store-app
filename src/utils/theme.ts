import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {                                                                                                                                                      
            main: '#FE645E',
            dark: '#e45a54',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#5C5C5C',
            secondary: '#000000',
        }
    },
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
            color: '#5C5C5C',
        },
        body2: {
            color: '#5C5C5C',
        },
        caption: {
            color: '#494949',
            fontWeightRegular: 500,
            fontSize: 15
        },
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
                    borderColor: '#494949',
                },
                input: {
                    '&::placeholder': {
                        color: '#5C5C5C',
                    },
                },
            }
        }, 
    }
});

export default theme;
