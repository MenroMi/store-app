// basic
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography } from '@mui/material';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import FullScreenLoader from '../../Loader/FullScreenLoader';

// styled component
import { CardsGridContainer, CatalogIsEmptyContainer, CustomProguctsBlock, CustomSearchOverlay } from './CardListStyles';

// interface
import { AttrFromData } from '@/types/cardListTypes';
import { getFilteredData } from '@/services/searchApi';
import { useQuery } from '@tanstack/react-query';
import { Routes } from '@/constants/routes';

const CardList = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();

  const query = makeArray(router.query);

  const { data, isFetching, isError, isRefetching } = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
    keepPreviousData: true,
  });
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  if (isError) {
    Router.push('/404');
    return null;
  }

  return (
    <CustomSearchOverlay
    sx={{
        overflowY: `${isFetching ? 'clip' : 'scroll'}`,
      }}
    >
      {isFetching ? (
        <Box
          sx={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255,255, 255, 0.5)',
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            zIndex: '5000',
            top: '0',
            transition: '0.3s ease-in',
          }}
        >
          <FullScreenLoader />
        </Box>
      ) : (
        <CustomProguctsBlock >
          {Array.isArray(data?.data) && data?.data.length !== 0 ? (
            <CardsGridContainer container>
              {data?.data.map(
                ({
                  id,
                  attributes: {
                    name,
                    price,
                    images: { data: imagesData },
                    gender: { data: genderData },
                  },
                }: AttrFromData) => (
                  <Grid item key={id}>
                    <Card
                      productCategory={
                        genderData ? (genderData.id === 3 ? "Men's Shoes" : "Women's Shoes") : ''
                      }
                      productImageSrc={
                        imagesData
                          ? imagesData[0]
                            ? imagesData[0].attributes.url
                            : singInImg
                          : singInImg
                      }
                      productName={name}
                      productPrice={price}
                      productId={id}
                    >
                      <DropDownMenu productName={name} productID={id} />
                    </Card>
                  </Grid>
                )
              )}
            </CardsGridContainer>
          ) : (
            <CatalogIsEmptyContainer>
              <Box
                component={Image}
                src={emptyIcon}
                alt="catalog is empty"
                width={queryDownMd ? 150 : 200}
                height={queryDownMd ? 150 : 200}
                priority={true}
                sx={{
                  opacity: '0.1',
                }}
              />
              <Typography
                variant="h2"
                sx={{ opacity: '0.5', width: queryDownMd ? '250px' : '375px' }}
              >
                Catalog is empty.
              </Typography>
            </CatalogIsEmptyContainer>
          )}
          </CustomProguctsBlock>
      )}
    </CustomSearchOverlay>
  );
};

export default CardList;
