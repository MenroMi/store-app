import { Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import styles from '@/styles/componentStyles/ProductCardBag.module.scss';
import DownIcon from '@/assets/icons/down.svg';
import Image from 'next/image';

interface IBagButtonProps {
  ButtonValue: string;
}

const BagParameterButton = ({ ButtonValue }: IBagButtonProps) => {
  const {
    palette: {
      text: { caption },
    },
  } = useTheme();
  return (
    <Button sx={{ padding: '0', justifyContent: 'space-between' }}>
      <Typography variant="btnIconText" color={caption}>
        {ButtonValue}
      </Typography>
      <Image src={DownIcon} alt="down" className={styles.product__down}></Image>
    </Button>
  );
};

export default BagParameterButton;
