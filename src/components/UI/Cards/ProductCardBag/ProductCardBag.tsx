// basic
import Image from 'next/image';

// mui
import { Box, Typography, useTheme, Theme, useMediaQuery } from '@mui/material';

// images
import DeleteIcon from '@/assets/icons/delete.svg';

// components
import BagParameterButton from '@/components/UI/Buttons/BagParameterButton/BagParameterButton';

// styled components
import { CustomBagWrapper, CustomBox, CustomButton } from './styles';

// interface
import { ICardBagProps } from '@/types/productCardBag';

const ProductCardBag = ({
  productImageSrc,
  productName,
  productPrice,
  productCategory,
  inStock,
}: ICardBagProps) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

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
            marginLeft: {
              xl: '25px',
              lg: '25px',
              md: '20px',
              sm: '20px',
              xs: '20px',
            },
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
              minHeight: { lg: '28px', md: 'auto' },
            }}
          >
            <BagParameterButton ButtonValue={'Quantity'} />
            <CustomButton>
              <Box
                component={Image}
                src={DeleteIcon}
                alt="delete"
                sx={{
                  position: 'relative',
                  right: '7px',
                  width: queryUpSm ? 'auto' : '15px',
                }}
              ></Box>
              <Typography variant="btnIconText" color={theme?.palette?.text?.iconLight}>
                Delete
              </Typography>
            </CustomButton>
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </>
  );
};

export default ProductCardBag;
