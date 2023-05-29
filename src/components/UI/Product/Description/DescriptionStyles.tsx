import { Button, styled, Typography } from "@mui/material";

export const CustomButton = styled(Button)({
    width: '100%',
    padding: 20,
});

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.caption,
}));