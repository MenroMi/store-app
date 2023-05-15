// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

// image
import singInImg from '@/assets/singInBg.png';

// component
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';

// styled component
import { CardsGridContainer } from './CardListStyles';

// interface
interface ICardListProps {
  hide?: boolean;
  products?: any[];
}

// FUNCTIONAL COMPONENT
const CardList: React.FC<ICardListProps> = ({ hide, products = [...new Array(16).fill(null)] }) => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

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
      }}
    >
      {products.map((product, id) => {
        return (
          <Grid
            key={product.id || id}
            xl={hide ? 2.3 : 3}
            lg={hide ? 3 : 4}
            md={hide ? 4 : 6}
            sm={5}
            xs={5.7}
            item
          >
            <Card
              productCategory={product.productCategory || "Women's shoes"}
              productImageSrc={product.productImageSrc || singInImg}
              productName={product.productName || 'Nike Air Max 270'}
              productPrice={product.productPrice || 160}
            >
              <DropDownMenu />
            </Card>
          </Grid>
        );
      })}
    </CardsGridContainer>
  );
};

export default CardList;
