// basic
import Image from 'next/image';

// mui
import { Box, Divider, Grid } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// image
import hideFilterIcon from '@/assets/icons/filter.svg';

// component
import SearchPath from '@/components/UI/Search/SearchPath/SearchPath';

// styled components
import { CustomTypographyH2, CustomHideFilterBtn, CustomGridContainer } from './SearchResultStyles';

// interface
interface ISearchResultProps {
  hide: boolean;
  onHide: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// FUNCTIONAL COMPONENT
const SearchResult: React.FC<ISearchResultProps> = ({ onHide, hide }) => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

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

      <CustomGridContainer container p={`${!queryUpMd && '0 20px'}`}>
        <Grid item>
          {!queryUpMd || hide ? (
            <SearchPath hide={hide} />
          ) : (
            <CustomTypographyH2
              variant="h2"
              sx={{
                padding: '0',
                fontSize: { xl: 45, md: 35, xs: 40 },
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
              <Box
                component={Image}
                src={hideFilterIcon}
                alt="hide filter"
                sx={{
                  width: { md: '24px', sm: '18px', xs: '15px' },
                }}
              />
            }
            sx={{
              fontSize: { lg: '24px', md: '24px', sm: '16px', xs: '15px' },
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
