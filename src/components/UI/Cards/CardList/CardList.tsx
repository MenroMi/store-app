// basic
import Image, { StaticImageData } from 'next/image';
import Router, { useRouter } from 'next/router';
import { useContext } from 'react';
import { hydrate } from '@tanstack/react-query';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Box, Typography } from '@mui/material';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';

// styled component
import { CardsGridContainer, CatalogIsEmptyContainer, CustomSearchOverlay } from './CardListStyles';

// interface
import { AttrFromData } from '@/types/cardListTypes';
import { getFilteredData } from '@/services/searchApi';
import { useQuery } from '@tanstack/react-query';

// FUNCTIONAL COMPONENT
const CardList: React.FC = (): JSX.Element | null => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const contextFilter = useContext(FiltersContext);
  const router = useRouter();

  const { data, isFetched, isError, error, isLoading } = useQuery({
    queryKey: ['filteredData', router.query],
    queryFn: () => getFilteredData(router.query),
    keepPreviousData: true,
  });

  const isVisible = (elem: JSX.Element, id: number) => {
    return (
      <Grid
        key={id}
        xl={contextFilter?.hide ? 2.3 : 3}
        lg={contextFilter?.hide ? 3 : 4}
        md={contextFilter?.hide ? 4 : 6}
        sm={5}
        xs={5.7}
        item
      >
        {elem}
      </Grid>
    );
  };
  if (isError) {
    Router.push('/404');
    return null;
  }

  const checkData = () => {
    if (Array.isArray(data?.data) && data?.data.length > 0) {
      return data?.data.map(({ id, attributes }: AttrFromData) => {
        const { name, price, images, gender } = attributes;
        let url: string | StaticImageData;

        if (images?.data === null || typeof images === 'undefined') {
          url = singInImg;
        } else {
          if (typeof images?.data?.[0]?.attributes?.url === 'undefined') {
            url = singInImg;
          } else {
            url = images?.data?.[0]?.attributes?.url;
          }
        }

        return isVisible(
          <Card
            productCategory={gender?.data?.id === 3 ? "Men's Shoes" : "Women's Shoes"}
            productImageSrc={url}
            productName={name}
            productPrice={price}
          >
            <DropDownMenu productName={name} productID={id} />
          </Card>,
          id
        );
      });
    }
    return (
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
    );
  };

  return (
    <CustomSearchOverlay>
      <CardsGridContainer
        container
        columnSpacing={{
          md: 5,
          lg: 5,
          xl: 7,
        }}
        sx={{
          padding: `${!queryUpMd && '0 0 0 20px'}`,
          columnGap: contextFilter?.hide && queryUpMd ? { xl: '13px' } : '',
          rowGap: { md: '32px', xs: '16px' },
          justifyContent: 'flex-start',
        }}
      >
        {isLoading && !isFetched ? <h1>Loading...</h1> : checkData()}
      </CardsGridContainer>
    </CustomSearchOverlay>
  );
};

export default CardList;
