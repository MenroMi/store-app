// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

// component
import Card from '../Card/Card';

interface ICardListProps {
  hide: boolean;
}

const CardList: React.FC<ICardListProps> = ({ hide }) => {
  const theme = useTheme();
  const queryMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      container
      columnSpacing={{
        md: 5,
        lg: 5,
        xl: 7,
      }}
      rowGap="32px"
      sx={{
        '&.MuiGrid-root': {
          marginTop: '2.25em',
        },
        margin: '0 auto',
        padding: `${!queryMD && '0 20px'}`,
        justifyContent: 'space-between',
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
    </Grid>
  );
};

export default CardList;
