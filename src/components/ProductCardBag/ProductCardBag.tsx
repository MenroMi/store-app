import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import DeleteIcon from '@/assets/icons/delete.svg';
import SaveIcon from '@/assets/icons/save.svg';
import DownIcon from '@/assets/icons/down.svg';
import styles from '@/styles/componentStyles/ProductCardBag.module.scss';
import BagParameterButton from '../BagParameterButton/BagParameterButton';

interface ICardBagProps {
  productImageSrc: string | StaticImageData;
  productName: string;
  productPrice: number;
  productCategory: string;
  inStock: boolean;
}

const ProductCardBag = ({
  productImageSrc,
  productName,
  productPrice,
  productCategory,
  inStock,
}: ICardBagProps) => {
  const {
    palette: {
      text: { caption },
    },
  } = useTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '983px',
          height: '234px',
          borderRadius: '6px',
          padding: '10px',
          '&:hover': {
            boxShadow: 4,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '223px',
          }}
        >
          <Image
            src={productImageSrc}
            alt="Product"
            width={223}
            height={214}
            className={styles.product__main}
          ></Image>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: '694px',
            marginLeft: {
              xl: 'auto',
              lg: '40px',
              md: '20px',
              sm: '20px',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '694px',
              marginTop: '3px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '245px',
              }}
            >
              <Typography variant="h3">{productName}</Typography>
              <Typography variant="h5">{productCategory}</Typography>
              <Typography
                variant="h4Warning"
                sx={{
                  marginTop: '10px',
                  display: { lg: 'block', md: 'none', sm: 'block', xs: 'none' },
                }}
              >
                {inStock ? 'In Stock' : 'Not available'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">${productPrice}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              minHeight: { lg: '28px', md: 'auto' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { lg: 'row', md: 'column', sm: 'row', xs: 'column' },
                justifyContent: 'space-between',
                minHeight: { lg: '28px', md: 'auto', sm: '28px', xs: 'auto' },
                maxWidth: '362px',
              }}
            >
              <BagParameterButton ButtonValue={'Size'} />
              <BagParameterButton ButtonValue={'Color'} />
              <BagParameterButton ButtonValue={'Quantity'} />
              {/* <Button sx={{ padding: '0', width: '70px', justifyContent: 'space-between' }}>
                <Typography variant="btnIconText" color={caption}>
                  Size
                </Typography>
                <Image src={DownIcon} alt="down" className={styles.product__down}></Image>
              </Button>
              <Button sx={{ padding: '0', width: '84px', justifyContent: 'space-between' }}>
                <Typography variant="btnIconText" color={caption}>
                  Color
                </Typography>
                <Image src={DownIcon} alt="down" className={styles.product__down}></Image>
              </Button>
              <Button sx={{ padding: '0', width: '121px', justifyContent: 'space-between' }}>
                <Typography variant="btnIconText" color={caption}>
                  Quantity
                </Typography>
                <Image src={DownIcon} alt="down" className={styles.product__down}></Image>
              </Button> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: { lg: '15px', md: '0', sm: '15px', xs: 'auto' },
                flexDirection: { lg: 'row', md: 'column', sm: 'row', xs: 'column' },
                justifyContent: {
                  lg: 'space-between',
                  md: 'flex-end',
                  sm: 'space-between',
                  xs: 'flex-end',
                },
                alignItems: {
                  lg: 'space-between',
                  md: 'flex-start',
                  sm: 'space-between',
                  xs: 'flex-end',
                },
                minHeight: { lg: '28px', md: 'auto', sm: '28px', xs: 'auto' },
                maxWidth: '227px',
              }}
            >
              <Button
                sx={{
                  padding: '0',
                  width: '87px',
                  justifyContent: 'flex-end',
                  minHeight: '28px',
                }}
              >
                <Image src={SaveIcon} alt="Save" className={styles.product__save}></Image>
                <Typography variant="btnIconText" color="#6E7278">
                  Save
                </Typography>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                sx={{ padding: '0', width: '108px', justifyContent: 'flex-end', minHeight: '28px' }}
              >
                <Image src={DeleteIcon} alt="delete" className={styles.product__delete}></Image>
                <Typography variant="btnIconText" color="#6E7278">
                  Delete
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCardBag;
