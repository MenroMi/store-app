import React, { useContext, useState } from 'react';
import { ImageContainer, CustomImage, DeleteIconContainer } from './AddProductImageConatinerStyles';
import { Theme, useMediaQuery, useTheme } from '@mui/material';

import deleteIcon from '@/assets/icons/delete-icon.svg';
import Image from 'next/image';
import { ModalContext } from '@/components/Providers/modal';

interface IAddProductImageConatinerProps {
  src: string;
  id: number;
}

export default function AddProductImageConatiner({ src, id }: IAddProductImageConatinerProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));

  const { setIsOpen, setClickedId } = useContext(ModalContext);

  const [isHovered, setIsHovered] = useState<boolean>(false);

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
        <DeleteIconContainer
          display={isHovered ? 'block' : 'none'}
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setClickedId(id);
            setIsOpen(true);
          }}
        >
          <Image src={deleteIcon} alt="Delete" width={80} height={80} />
        </DeleteIconContainer>
      </ImageContainer>
    </>
  );
}
