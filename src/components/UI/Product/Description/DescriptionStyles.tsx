import { Button, styled, Typography } from "@mui/material";

export const CustomButton = styled(Button)(({theme}) =>({
    width: '100%',
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.caption,
}));