// basic
import Image from 'next/image';

// mui
import { Box, Divider, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// image
import hideFilterIcon from '../../assets/icons/filter.svg';

// component
import SearchPath from '../SearchPath/SearchPath';

// styled components
import { CustomTypographyH2, CustomHideFilterBtn, CustomGridContainer } from './SearchResultStyles';

// interface
interface ISearchResultProps {
  hide: boolean;
  onHide: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// FUNCTIONAL COMPONENT
const SearchResult: React.FC<ISearchResultProps> = ({ onHide, hide }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ alignSelf: 'flex-end', flex: 2 }}>
      {!matches && (
        <>
          <CustomTypographyH2 variant="h2">Search results</CustomTypographyH2>
          <Divider sx={{ width: '100%', marginTop: '12px' }} />
        </>
      )}

      <CustomGridContainer
        container
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
            <CustomTypographyH2
              variant="h2"
              sx={{
                padding: '0',
                fontSize: { md: 45, xs: 40 },
                flex: 2,
              }}
            >
              Search results
            </CustomTypographyH2>
          )}
        </Grid>

        <Grid item>
          <CustomHideFilterBtn
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
              height: `${!matches ? '30px' : '50px'}`,
            }}
          >
            {hide ? 'Filters' : 'Hide Filters'}
          </CustomHideFilterBtn>
        </Grid>
      </CustomGridContainer>
    </Box>
  );
};

export default SearchResult;
