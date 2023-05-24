// basic
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { useContext } from 'react';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Box, Typography } from '@mui/material';

// context
import { FiltersContext } from '@/contexts/filtersContext';
import { ProductsContext } from '@/contexts/productsContext';

// utils
import { dataFromActiveFilters } from '@/utils/filters/activeProducts';

// image
import singInImg from '@/assets/singInBg.png';
import emptyIcon from '@/assets/icons/empty.svg';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';

// styled component
import { CardsGridContainer, CatalogIsEmptyContainer, CustomSearchOverlay } from './CardListStyles';
import { ONE_MOCKED_PRODUCT } from '@/constants/mockedData';

// interface
import { ICardListProps, AttrFromData } from '@/types/cardListTypes';
import { uploadImageURL } from '@/constants/urls';

// FUNCTIONAL COMPONENT
const CardList: React.FC<ICardListProps> = ({
  products = [...new Array(8).fill(ONE_MOCKED_PRODUCT)],
}): JSX.Element | null => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const contextFilter = useContext(FiltersContext);
  const contextProducts = useContext(ProductsContext);

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

  if (contextProducts?.isError) {
    Router.push('/404');
    return null;
  }

  const checkData = () => {
    let products = dataFromActiveFilters(
      contextFilter?.activeFilters!,
      contextFilter?.data,
      contextProducts?.data
    );

    if (Array.isArray(products)) {
      return products.map(({ id, attributes }: AttrFromData) => {
        const { name, price, images, gender } = attributes;
        let url;

        if (images?.data === null || typeof images === 'undefined') {
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
      {contextProducts?.isLoading ? (
        <Box>Loading...</Box>
      ) : (
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
          {contextProducts?.isFetched &&
            contextProducts?.data &&
            contextFilter?.data &&
            checkData()}
        </CardsGridContainer>
      )}
    </CustomSearchOverlay>
  );
};

export default CardList;
