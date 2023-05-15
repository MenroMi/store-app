// basic
import Image from 'next/image';
import Router from 'next/router';
// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Skeleton, Typography, Stack } from '@mui/material';
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
interface ICardListProps {
  hide: boolean;
}

interface AttrFromData {
  id: number;
  attributes: {
    name: string;
    price: number;
  };
}

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
        justifyContent: `${hide ? 'space-between' : 'flex-start'}`,
      }}
    >
      {isFetching && isLoading ? (
        [...new Array(8).fill(null)].map((_, id) => {
          return isVisible(<Skeleton width={320} height={443} variant="rectangular" />, id);
        })
      ) : isFetched && !isError && !isLoading && data?.data ? (
        data?.data?.map(({ id, attributes }: AttrFromData) => {
          const { name, price } = attributes;

          return isVisible(
            <Card
              productCategory="Women's shoes"
              productImageSrc={singInImg}
              productName={name}
              productPrice={price}
            />,
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
            >
            <DropDownMenu />
          <Typography variant="h2" sx={{ opacity: '0.5' }}>
            Catalog is empty.
            </Card>
          </Typography>
        </CatalogIsEmptyContainer>
      )}
    </CardsGridContainer>
  );
};

export default CardList;
