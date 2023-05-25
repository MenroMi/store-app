// basic
import Image from 'next/image';
import Router from 'next/router';
import { useContext } from 'react';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography} from '@mui/material';

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

// interface
import { AttrFromData } from '@/types/cardListTypes';
import FullScreenLoader from '../../Loader/FullScreenLoader';

const CardList = () => {
  const theme = useTheme<Theme>();
  const contextFilter = useContext(FiltersContext);
  const contextProducts = useContext(ProductsContext);
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

  if (contextProducts?.isError) {
    Router.push('/404');
    return null;
  }

  let products = dataFromActiveFilters(
    contextFilter?.activeFilters!,
    contextFilter?.data,
    contextProducts?.data
  );
  return (

    <CustomSearchOverlay>
      {contextProducts?.isLoading ? (
        <FullScreenLoader/>
      ) :
      <>
      {Array.isArray(products) ?
        (<CardsGridContainer container >
          {products.map(({ id, attributes: { name, price, images: { data: imagesData }, gender: { data: genderData } } }: AttrFromData) => (
            <Grid item key={id}>
            <Card
              productCategory={genderData ? (genderData.id === 3 ? "Men's Shoes" : "Women's Shoes") : ''}
              productImageSrc={imagesData ? (imagesData[0] ? imagesData[0].attributes.url : singInImg) : singInImg}
              productName={name}
              productPrice={price}
            >
              <DropDownMenu productName={name} productID={id} />
            </Card>
            </Grid>
          ))} 
            </CardsGridContainer>) : (<CatalogIsEmptyContainer>
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
              <Typography variant="h2" sx={{ opacity: '0.5', width:queryDownMd ? '250px' : '375px'}}>
                Catalog is empty.
              </Typography>
            </CatalogIsEmptyContainer>)}
      </>}
    </CustomSearchOverlay>
  )
};

export default CardList;
