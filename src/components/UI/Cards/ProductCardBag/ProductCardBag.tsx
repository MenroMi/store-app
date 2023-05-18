// basic
import Image, { StaticImageData } from 'next/image';
import { useContext, useEffect, useState } from 'react';

// mui
import { Box, Typography, useTheme, Theme, useMediaQuery } from '@mui/material';

// components
import BagQuantityButton from '@/components/UI/Buttons/BagQuantityButton/BagQuantityButton';
import BagDeleteButton from '@/components/UI/Buttons/BagDeleteButton/BagDeleteButton';

// styled components
import { CustomBagWrapper, CustomBox } from './styles';

// interface
import { ICardBagProps } from '@/types/productCardBag';
interface IProductBagProps {
  id: number;
  productImageSrc: string | StaticImageData;
  productName: string;
  productPrice: number;
  productCategory: string;
  inStock: boolean;
  changeQuantity: (id: number, quantity: number) => void;
  deleteProduct: (id: number) => void;
}

const ProductCardBag = ({
  id,
  productImageSrc,
  productName,
  productPrice,
  productCategory,
  inStock,
  // initialQuantity,
  // addProduct,
  // removeProduct,
  changeQuantity,
  deleteProduct,
}: IProductBagProps) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [quantity, setQuantity] = useState<number>(1);

  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    setQuantity(quantity - 1);
  };

  const handleChangeQuantity = (id: number) => {
    if (quantity <= 1) {
      setQuantity(1);
    }
    changeQuantity(id, quantity);
  };

  useEffect(() => {
    handleChangeQuantity(id);
  }, [quantity]);

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
            src={productImageSrc}
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
              <Typography variant="h3">{productName}</Typography>
              <Typography variant="h5">{productCategory}</Typography>
              <Typography
                variant="h4Warning"
                sx={{
                  marginTop: '10px',
                }}
              >
                {inStock ? 'In Stock' : 'Not available'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">${productPrice}</Typography>
            </Box>
          </CustomBox>
          <CustomBox
            sx={{
              maxHeight: { sm: '28px', xs: '20px' },
            }}
          >
            <BagQuantityButton
              quantity={quantity}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
            <BagDeleteButton deleteProduct={() => deleteProduct(id)} />
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </>
  );
};

export default ProductCardBag;
