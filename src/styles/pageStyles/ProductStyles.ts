import { Grid, styled } from '@mui/material';

export const ProductContainer = styled(Grid)(({ theme }) => ({
    maxWidth: 1300,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px auto',
}));