// basic
import Image from 'next/image';

// mui
import { Box, Divider, Typography, useTheme, Theme } from '@mui/material';

// images
import DeleteIcon from '@/assets/icons/delete.svg';
import SaveIcon from '@/assets/icons/save.svg';

// components
import BagParameterButton from '../BagParameterButton/BagParameterButton';

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

  return (
    <>
      <CustomBagWrapper
        sx={{
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
          <Box
            component={Image}
            src={productImageSrc}
            alt="Product"
            width={223}
            height={214}
            sx={{ borderRadius: '6px' }}
          ></Box>
        </Box>
        <CustomBox
          sx={{
            flexDirection: 'column',
            maxWidth: '694px',
            marginLeft: {
              xl: 'auto',
              lg: '40px',
              md: '20px',
              sm: '20px',
            },
          }}
        >
          <CustomBox
            sx={{
              marginTop: '3px',
              maxWidth: '694px',
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
          </CustomBox>
          <CustomBox
            sx={{
              minHeight: { lg: '28px', md: 'auto' },
            }}
          >
            <CustomBox
              sx={{
                flexDirection: { lg: 'row', md: 'column', sm: 'row', xs: 'column' },
                minHeight: { lg: '28px', md: 'auto', sm: '28px', xs: 'auto' },
                maxWidth: '362px',
              }}
            >
              <BagParameterButton ButtonValue={'Size'} />
              <BagParameterButton ButtonValue={'Color'} />
              <BagParameterButton ButtonValue={'Quantity'} />
            </CustomBox>
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
              <CustomButton sx={{ width: '87px' }}>
                <Box
                  component={Image}
                  src={SaveIcon}
                  alt="Save"
                  sx={{
                    position: 'relative',
                    bottom: '2px',
                    right: '7px',
                  }}
                ></Box>
                <Typography variant="btnIconText" color="#6E7278">
                  Save
                </Typography>
              </CustomButton>
              <Divider orientation="vertical" flexItem />
              <CustomButton sx={{ width: '108px' }}>
                <Box
                  component={Image}
                  src={DeleteIcon}
                  alt="delete"
                  sx={{
                    position: 'relative',
                    right: '7px',
                  }}
                ></Box>
                <Typography variant="btnIconText" color={theme?.palette?.text?.iconLight}>
                  Delete
                </Typography>
              </CustomButton>
            </Box>
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </>
  );
};

export default ProductCardBag;
