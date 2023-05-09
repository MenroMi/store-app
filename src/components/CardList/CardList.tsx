// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

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
  const theme = useTheme();
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CardsGridContainer
      container
      columnSpacing={{
        md: 5,
        lg: 5,
        xl: 7,
      }}
      rowGap="32px"
      sx={{
        padding: `${!queryUpMd && '0 20px'}`,
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
            <Card />
          </Grid>
        );
      })}
    </CardsGridContainer>
  );
};

export default CardList;