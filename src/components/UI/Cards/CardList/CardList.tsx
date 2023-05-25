// basic
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography } from '@mui/material';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import FullScreenLoader from '../../Loader/FullScreenLoader';

// styled component
import { CardsGridContainer, CatalogIsEmptyContainer, CustomSearchOverlay } from './CardListStyles';

// interface
import { AttrFromData } from '@/types/cardListTypes';
import { getFilteredData } from '@/services/searchApi';
import { useQuery } from '@tanstack/react-query';
import { ONE_MOCKED_PRODUCT } from '@/constants';

const CardList = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();

  const { data, isFetched, isError, error, isLoading } = useQuery({
    queryKey: ['filteredData', router.query],
    queryFn: () => getFilteredData(router.query),
    keepPreviousData: true,
  });
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  if (isError) {
    Router.push('/404');
    return null;
  }

  return (
    <CustomSearchOverlay>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <>
          {Array.isArray(data?.data) ? (
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
        </>
      )}
    </CustomSearchOverlay>
  );
};

export default CardList;
