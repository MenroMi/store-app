// basic
import React from 'react';
import Image from 'next/image';

// assets
import rightArrow from '@/assets/icons/right.svg';
import leftArrow from '@/assets/icons/left.svg';

interface ISliderArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  next?: boolean;
}

export default function SliderArrow({ className, style, onClick, next = true }: ISliderArrowProps) {
  return (
    <Image
      src={next ? rightArrow : leftArrow}
      alt={next ? 'Next' : 'Previous'}
      className={className}
      style={{ ...style, display: 'block', right: `${next && '0'}` }}
      onClick={onClick}
    />
  );
}
