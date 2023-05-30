import { Button, styled, Typography } from "@mui/material";

export const CustomButton = styled(Button)(({theme}) =>({
    width: '100%',
    padding: 20,
    [theme.breakpoints.down('sm')]:{
    padding: 10,
    }
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.caption,
}));