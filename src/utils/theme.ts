import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#FE645E',
			dark: '#e45a54',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#5C5C5C',
			secondary: '#000000',
		},
	},
	typography: {
		fontFamily: 'Work Sans',
		fontWeightRegular: 300,
		fontSize: 15,
		h2: {
			fontSize: 45,
			fontWeight: 500,
		},
		h3: {
			fontSize: 30,
			fontWeight: 500,
		},
		h4: {
			fontSize: 25,
			fontWeight: 500,
		},
		h5: {
			fontSize: 20,
			fontWeight: 500,
		},
		h6: {
			fontSize: 16,
			fontWeight: 500,
		},
		body1: {
			color: '#5C5C5C',
			fontSize: 15,
			lineHeight: '17.6px',
		},
		body2: {
            fontWeight: 500,
			color: '#494949',
			fontSize: 15,
			lineHeight: '17.6px',
		},
		caption: {
			color: '#494949',
			fontWeightRegular: 500,
			fontSize: 15,
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
					padding: 10,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: '#494949',
                    borderRadius: '8px'
				},
				input: {
					'&::placeholder': {
						color: '#5C5C5C',
					},
				},
			},
		},
		MuiCheckbox:{
			styleOverrides: {
				root:{
					padding: '4px 0px 4px 10px',
				}
			}
		}
	},
})

export default theme;
