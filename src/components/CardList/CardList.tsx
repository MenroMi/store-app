// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

// image
import singInImg from '../../assets/singInBg.png';

// component
import Card from '../Card/Card';

// styled component
import { CardsGridContainer } from './CardListStyles';

// interface
interface ICardListProps {
  hide: boolean;
}

// FUNCTIONAL COMPONENT
const CardList: React.FC<ICardListProps> = ({ hide }) => {
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
      {[...new Array(16).fill(null)].map((_, id) => {
        return (
          <Grid
            key={id}
            xl={hide ? 2.3 : 3}
            lg={hide ? 3 : 4}
            md={hide ? 4 : 6}
            sm={5}
            xs={5.7}
            item
          >
            <Card
              productCategory="Women's shoes"
              productImageSrc={singInImg}
              productName="Nike Air Max 270"
              productPrice={160}
            />
          </Grid>
        );
      })}
    </CardsGridContainer>
  );
};

export default CardList;
