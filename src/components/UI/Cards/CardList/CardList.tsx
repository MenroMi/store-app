// basic
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import React, { useContext } from 'react';

// rq
import { useQuery } from '@tanstack/react-query';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, Grid, Typography } from '@mui/material';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';

// context
import { FiltersContext } from '@/providers/filters';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// constants
import { Routes } from '@/constants/routes';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';
import ResetFilterButton from '@/components/UI/Buttons/ResetFilterButton/ResetFilterButton';

// styled component
import {
  CardsGridContainer,
  CatalogIsEmptyContainer,
  CustomProguctsBlock,
  CustomSearchOverlay,
} from './styles';

// interface
import { AttrFromData } from '@/types/cardListTypes';
import { getFilteredData } from '@/services/searchApi';

const CardList: React.FC = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const context = useContext(FiltersContext);

  const query = makeArray(router.query);

  const { data, isFetching, isError, isFetched } = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
    keepPreviousData: true,
  });
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  if (isError) {
    Router.push('/404');
    return null;
  }

  if (isFetched && /Error/g.test(data?.name)) {
    return (
      <>
        <Box
          component={Image}
          src={emptyIcon}
          alt="catalog is empty"
          width={queryDownMd ? 150 : 200}
          height={queryDownMd ? 150 : 200}
          priority={true}
          sx={{
            mt: '100px',
            opacity: '0.1',
          }}
        />
        <Typography variant="h4" sx={{ opacity: '0.5', width: '100%', textAlign: 'center' }}>
          Oops... {data?.msg}
        </Typography>
        <ResetFilterButton />
      </>
    );
  }

  return (
    <CustomSearchOverlay
      sx={{
        overflowY: `${isFetching ? 'clip' : 'auto'}`,
      }}
    >
      {isFetching && !isFetched ? (
        <FullScreenLoader />
      ) : (
        <CustomProguctsBlock filterOpen={context ? context.hide : false}>
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
                  <Grid
                    item
                    key={id}
                    sx={{ cursor: 'pointer' }}
                    onClick={async () => {
                      await router.push(`${Routes.products}/${id}`);
                    }}
                  >
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
            <CatalogIsEmptyContainer
              sx={{
                left: `${context?.hide ? '50%' : '58%'}`,
              }}
            >
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
              <ResetFilterButton />
            </CatalogIsEmptyContainer>
          )}
        </CustomProguctsBlock>
      )}
    </CustomSearchOverlay>
  );
};

export default CardList;
