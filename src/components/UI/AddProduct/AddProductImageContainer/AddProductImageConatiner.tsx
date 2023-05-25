import React, { useContext, useState } from 'react';
import { ImageContainer, CustomImage, DeleteIconContainer } from './AddProductImageConatinerStyles';
import { Box, Theme, useMediaQuery, useTheme } from '@mui/material';

import deleteIcon from '@/assets/icons/delete-icon.svg';
import Image from 'next/image';
import { ModalContext } from '@/components/Providers/modal';

import deleteIconMobile from '@/assets/icons/close.svg';

interface IAddProductImageConatinerProps {
  src: string;
  id: number;
}

export default function AddProductImageConatiner({ src, id }: IAddProductImageConatinerProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

  const { setIsOpen, setClickedId } = useContext(ModalContext);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setClickedId(id);
    setIsOpen(true);
  };

  return (
    <>
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
        {queryDownLg ? (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', 
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              p: 0.6,
              m: 0.6,
              borderRadius: 0.6,
            }}
            onClick={handleOpenModal}
          >
            <Image src={deleteIconMobile} alt="Delete" width={16} height={16} />
          </Box>
        ) : (
          <DeleteIconContainer display={isHovered ? 'block' : 'none'} onClick={handleOpenModal}>
            <Image src={deleteIcon} alt="Delete" width={80} height={80} />
          </DeleteIconContainer>
        )}
      </ImageContainer>
    </>
  );
}