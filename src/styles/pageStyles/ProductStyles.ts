import { Grid, styled } from '@mui/material';

export const ProductContainer = styled(Grid)(({ theme }) => ({
    maxWidth: 1300,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px auto',
    
    [theme.breakpoints.down('lg')]:{
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
        padding:'0 20px',
        flexDirection:'column',
        margin: '20px auto',
        gap:'20px',
    },
}));