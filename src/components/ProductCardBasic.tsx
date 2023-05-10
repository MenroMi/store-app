// libs
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

// images
import dotsBtn from '../assets/icons/dots.svg';

// styles 
import styles from '@/styles/componentStyles/ProductCardBasic.module.scss';

interface IProductCardBasicProps {
  productImageSrc: string | StaticImageData;
  productName: string;
  productPrice: string;
  productCategory: string;
}

export default function ProductCardBasic({
  productImageSrc,
  productName,
  productPrice,
  productCategory,
}: IProductCardBasicProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Image src={productImageSrc} alt="Product" width={320} height={380} />
      <Image src={dotsBtn} className={styles.product__more} alt="More" />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1">{productName}</Typography>
        <Typography variant="subtitle1">{productPrice}</Typography>
      </Box>
      <Typography variant="subtitle2">{productCategory}</Typography>
    </Box>
  );
}
