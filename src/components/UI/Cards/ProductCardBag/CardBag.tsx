// basic
import Image, { StaticImageData } from 'next/image';
import router from 'next/router';
import { Routes } from '@/constants/routes';

// mui
import { Box, Typography, useTheme, Theme, useMediaQuery } from '@mui/material';

// styled components
import { CustomBagWrapper, CustomBox, CustomImage } from './styles';

// interface
export type CartItemProps = {
  id: number;
  productCategory: string;
  productImageSrc: StaticImageData | string;
  productName: string;
  productPrice: number;
};

const CardBag = ({
  id,
  productCategory,
  productImageSrc,
  productName,
  productPrice,
}: CartItemProps) => {
  const theme = useTheme<Theme>();
  const queryUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const keyStr =
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8lxJXDwAGaQJBAQNgCgAAAABJRU5ErkJggg==';

  return (
    <div>
      <CustomBagWrapper
        onClick={async (e) => {
          await router.push(`${Routes.products}/${id}`);
        }}
        sx={{
          cursor: 'pointer',
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
            sx={{
              borderRadius: '6px',
              maxWidth: queryUpSm ? '223px' : '104px',
              maxHeight: queryUpSm ? '214px' : '101px',
            }}
          >
            <CustomImage
              src={productImageSrc}
              alt="product template"
              priority={true}
              placeholder="blur"
              blurDataURL={keyStr}
              width={223}
              height={214}
              sx={{
                maxWidth: queryUpSm ? '223px' : '104px',
                maxHeight: queryUpSm ? '214px' : '101px',
              }}
            />
          </Box>
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
                In Stock
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">{productPrice}$</Typography>
            </Box>
          </CustomBox>
        </CustomBox>
      </CustomBagWrapper>
    </div>
  );
};

export default CardBag;
