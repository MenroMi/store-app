// basic
import Image from 'next/image';

// mui
import { Typography, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';

// components
import CardList from '../CardList/CardList';

// images
import hideFilterIcon from '../../assets/icons/filter.svg';
import SearchPath from '../SearchPath/SearchPath';

// interface
interface ISearchResultWinProps {
  hide: boolean;
  onHide: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// FC
const SearchResultWin: React.FC<ISearchResultWinProps> = ({ onHide, hide }): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="main"
      sx={{
        maxWidth: `${hide ? '1920px' : '1580px'}`,
        padding: '68px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!matches && (
        <>
          <Typography
            variant="h2"
            sx={{
              padding: '0 20px',
              margin: '0',
              lineHeight: '53px',
            }}
          >
            Search results
          </Typography>
          <Divider sx={{ width: '100%', marginTop: '12px' }} />
        </>
      )}

      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        position="sticky"
        top="0"
        bgcolor={theme?.palette?.primary?.contrastText}
        columnSpacing={{
          xs: 0,
          md: 5,
          lg: 4,
          xl: 7,
        }}
        p={`${!matches && '0 20px'}`}
      >
        <Grid item>
          {!matches ? (
            <SearchPath />
          ) : (
            <Typography
              variant="h2"
              sx={{ padding: '0', margin: '0', lineHeight: '53px', fontSize: { md: 40 } }}
            >
              Search results
            </Typography>
          )}
        </Grid>

        <Grid item>
          <Button
            onClick={onHide}
            variant="text"
            endIcon={
              <Image
                src={hideFilterIcon}
                alt="hide filter"
                style={{ width: `${!matches && '20px'}`, height: `${!matches && '20px'}` }}
              />
            }
            sx={{
              fontSize: `${!matches ? '20px' : '24px'}`,
              fontWeight: '400',
              lineHeight: '28px',
              color: theme?.palette?.text?.primary,
              textTransform: 'none',
              borderRadius: '10px',
              height: `${!matches ? '30px' : '50px'}`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            {hide ? 'Filters' : 'Hide Filters'}
          </Button>
        </Grid>
      </Grid>

      <CardList hide={hide} />
    </Box>
  );
};

export default SearchResultWin;
