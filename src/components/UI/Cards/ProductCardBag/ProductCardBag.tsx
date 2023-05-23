// basic
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

// mui
import { Box, Typography, useTheme, Theme, useMediaQuery, Button } from '@mui/material';

// components
import BagQuantityButton from '@/components/UI/Buttons/BagQuantityButton/BagQuantityButton';
import BagDeleteButton from '@/components/UI/Buttons/BagDeleteButton/BagDeleteButton';

// styled components
import { CustomBagWrapper, CustomBox } from './styles';

// context
import { BagContext } from '@/context/BagContext';

// import storeItems from "../../../../context/items.json"

const storeItems = [{ id: 1}, {id: 2}];

// interface
import { CardBagContextType, ICardBagProps } from '@/types/productCardBag';
interface IProductBagProps {
  id: number;
  // quantity: number;
}

const ProductCardBag: React.FC<IProductBagProps> = ({ id }) => {
  const context = useContext(BagContext) as CardBagContextType;
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const product = storeItems.find((item) => item.id === id);
  if (product == null) return null;
  const quantity = context.getItemQuantity(id);

  return (
    <>
      <CustomBagWrapper
        sx={{
          minHeight: queryUpSm ? '244px' : '121px',
          padding: queryUpSm ? '15px' : '10px',
          '&:hover': {
            boxShadow: 4,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: queryUpSm ? '223px' : '104px',
          }}
        >
          <Box
            component={Image}
            src={product.productImageSrc!}
            alt="Product"
            sx={{
              borderRadius: '6px',
              maxWidth: queryUpSm ? '223px' : '104px',
              maxHeight: queryUpSm ? '214px' : '101px',
            }}
          ></Box>
        </Box>
        <CustomBox
          sx={{
            flexDirection: 'column',
            marginLeft: queryUpSm ? '25px' : '20px',
          }}
        >
          <CustomBox>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h3">{product.productName}</Typography>
              <Typography variant="h5">{product.productCategory}</Typography>
              <Typography
                variant="h4Warning"
                sx={{
                  marginTop: '10px',
                }}
              >
                {product.inStock ? 'In Stock' : 'Not available'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">${product.productPrice}</Typography>
            </Box>
          </CustomBox>
          <CustomBox
            sx={{
              maxHeight: { sm: '28px', xs: '20px' },
            }}
          >
            <BagQuantityButton id={product.id} quantity={quantity} />
            <BagDeleteButton id={product.id} />
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </>
  );
};

export default ProductCardBag;
