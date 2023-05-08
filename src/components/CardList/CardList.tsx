// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

// styled component
import { CardsGridContainer } from './CardListStyles';

// component
import Card from '../Card/Card';

interface ICardListProps {
  hide: boolean;
}

const CardList: React.FC<ICardListProps> = ({ hide }) => {
  const theme = useTheme();
  const queryMD = useMediaQuery(theme.breakpoints.up('md'));

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
        padding: `${!queryMD && '0 20px'}`,
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
