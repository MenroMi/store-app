import React, { useState } from 'react';
import { ImageContainer, CustomImage, DeleteIconContainer } from './AddProductImageConatinerStyles';
import { Theme, useMediaQuery, useTheme } from '@mui/material';

import deleteIcon from '@/assets/icons/delete-icon.svg';
import Image from 'next/image';

interface IAddProductImageConatinerProps {
  src: string;
  id: number;
}

export default function AddProductImageConatiner({ src, id }: IAddProductImageConatinerProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ImageContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CustomImage
        src={src}
        alt="Product image"
        width={queryDownLg ? 160 : 320}
        height={queryDownLg ? 190 : 380}
      />
      <DeleteIconContainer display={isHovered ? 'block' : 'none'} onClick={() => console.log(id)}>
        <Image src={deleteIcon} alt="Delete" width={80} height={80} />
      </DeleteIconContainer>
    </ImageContainer>
  );
}
