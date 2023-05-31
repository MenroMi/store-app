import Image from 'next/image';
import { Grid, IconButton, styled } from '@mui/material';

export interface ICustomGalleryImageProps {
    selected?: boolean;
    ismain?: string;
}

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    maxWidth: 24,
    maxHeight: 24,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.contrastText,
}));

export const CustomGalleryImageContainer = styled(Grid)<ICustomGalleryImageProps>(({theme, ismain }) => ({
    width: 76,
    height: 76,
    [theme.breakpoints.down('sm')]:{
    width: 70,
    height: 70,
        },
    objectFit: 'cover',
    ...(!!ismain && {
        width: 588,
        height: 628,
        [theme.breakpoints.down('sm')]:{
        height: 360,
        },
    }),
     
}));

export const CustomGalleryImage = styled(Image)<ICustomGalleryImageProps>(({ selected }) => ({
    transition: 'all 0.3s ease',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: 'pointer',
    ...(selected && {
        filter: 'brightness(75%)',
        cursor: 'auto',
    }),
}));