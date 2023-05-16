// basic
import Image from 'next/image';
import Router from 'next/router';
// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
// react-query
import { useQuery } from '@tanstack/react-query';
// service
import { getProducts } from '@/services/searchApi';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';

// styled component
import { CardsGridContainer, CatalogIsEmptyContainer } from './CardListStyles';

// interface
import { ICardListProps, AttrFromData } from '@/types/cardListTypes';
import { uploadImageURL } from '@/constants';

// FUNCTIONAL COMPONENT
const CardList: React.FC<ICardListProps> = ({ hide }): JSX.Element | null => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  // react query fetch
  const { isLoading, isFetching, isFetched, isError, data } = useQuery({
    queryKey: ['all'],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });

  const isVisible = (elem: JSX.Element, id: number) => {
    return (
      <Grid key={id} xl={hide ? 2.3 : 3} lg={hide ? 3 : 4} md={hide ? 4 : 6} sm={5} xs={5.7} item>
        {elem}
      </Grid>
    );
  };

  if (isFetched) {
    console.log(data);
  }

  if (isError) {
    Router.push('/404');
    return null;
  }

  return (
    <CardsGridContainer
      container
      columnSpacing={{
        md: 5,
        lg: 5,
        xl: 7,
      }}
      sx={{
        padding: `${!queryUpMd && '0 20px'}`,
        rowGap: { md: '32px', xs: '16px' },
        justifyContent: `${hide ? 'flex-start' : 'space-between'}`,
      }}
    >
      {isFetching && isLoading ? (
        [...new Array(8).fill(null)].map((_, id) => {
          return isVisible(<Skeleton width={320} height={443} variant="rectangular" />, id);
        })
      ) : isFetched && !isError && !isLoading && data ? (
        data?.map(({ id, attributes }: AttrFromData) => {
          const { name, price, images, gender } = attributes;
          let url;

          if (images?.data === null) {
            url = singInImg;
          } else {
            url = uploadImageURL + images?.data?.[0]?.attributes?.url;
          }

          return isVisible(
            <Card
              productCategory={gender?.data?.id === 3 ? "Men's Shoes" : "Women's Shoes"}
              productImageSrc={url}
              productName={name}
              productPrice={price}
            >
              <DropDownMenu />
            </Card>,
            id
          );
        })
      ) : (
        <CatalogIsEmptyContainer>
          <Box
            component={Image}
            src={emptyIcon}
            alt="catalog is empty"
            width={200}
            height={200}
            sx={{
              opacity: '0.1',
            }}
          />
          <Typography variant="h2" sx={{ opacity: '0.5' }}>
            Catalog is empty.
          </Typography>
        </CatalogIsEmptyContainer>
      )}
    </CardsGridContainer>
  );
};

export default CardList;
