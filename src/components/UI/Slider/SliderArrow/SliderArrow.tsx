// basic
import React from 'react';
import Image from 'next/image';

// assets
import rightArrow from '@/assets/icons/right.svg';
import leftArrow from '@/assets/icons/left.svg';

import { Theme, useMediaQuery, useTheme } from '@mui/material';

interface ISliderArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  next?: boolean;
}

export default function SliderArrow({ className, style, onClick, next = true }: ISliderArrowProps) {
  const theme = useTheme<Theme>();
  const queryDownXl = useMediaQuery<unknown>(theme.breakpoints.down('xl'));

  return (
    <Image
      src={next ? rightArrow : leftArrow}
      alt={next ? 'Next' : 'Previous'}
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}
