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
  const queryUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ alignSelf: 'flex-end', flex: 2 }}>
      {!queryUpMd || hide ? (
        <>
          <CustomTypographyH2
            variant="h2"
            sx={{
              p: `${hide && queryUpMd && '0'}`,
            }}
          >
            Search results
          </CustomTypographyH2>
          <Divider sx={{ width: '100%', marginTop: '12px' }} />
        </>
      ) : null}

      <CustomGridContainer
        container
        columnSpacing={{
          xs: 0,
          md: 5,
          lg: 4,
          xl: 7,
        }}
        p={`${!queryUpMd && '0 20px'}`}
      >
        <Grid item>
          {!queryUpMd || hide ? (
            <SearchPath hide={hide} />
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
                style={{ width: `${!queryUpMd && '20px'}`, height: `${!queryUpMd && '20px'}` }}
              />
            }
            sx={{
              fontSize: `${!queryUpMd ? '20px' : '24px'}`,
              height: `${!queryUpMd ? '30px' : '50px'}`,
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
