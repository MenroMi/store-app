import Image from 'next/image';
import { Grid, IconButton, styled } from '@mui/material';

export interface ICustomGalleryImageProps {
    selected?: boolean;
    isMain?: boolean;
}

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    maxWidth: 24,
    maxHeight: 24,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.contrastText,
}));

export const CustomGalleryImageContainer = styled(Grid)<ICustomGalleryImageProps>(({ isMain }) => ({
    maxWidth: 76,
    maxHeight: 76,
    objectFit: 'cover',
    ...(isMain && {
        maxWidth: 588,
        maxHeight: 628,
    })
}));

export const CustomGalleryImage = styled(Image)<ICustomGalleryImageProps>(({ selected }) => ({
    transition: 'all 0.3s ease',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ...(selected && {
        filter: 'brightness(75%)'
    }),
}));