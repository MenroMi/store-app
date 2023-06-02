// basic
import Image from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';

// mui
import { Box, Grid } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// context
import { FiltersContext } from '@/providers/filters';

// image
import hideFilterIcon from '@/assets/icons/filter.svg';

// component
import SearchPath from '@/components/UI/Search/SearchPath/SearchPath';

// styled components
import {
  CustomTypographyH2,
  CustomHideFilterBtn,
  CustomGridContainer,
  ResetButton,
} from './styles';
import { Routes } from '@/constants/routes';

// FUNCTIONAL COMPONENT
const SearchResult: React.FC = () => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const context = useContext(FiltersContext);
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));

  return (
    <Box sx={{ alignSelf: 'flex-end', flex: 2 }}>
      {!queryUpMd || context?.hide ? (
        <>
          <CustomTypographyH2
            variant="h2"
            sx={{
              p: `${context?.hide && queryUpMd && '0 60px 0 40px'}`,
            }}
          >
            Search results
          </CustomTypographyH2>
        </>
      ) : null}

      <CustomGridContainer container p={`${!queryUpMd && '0 20px'}`}>
        <Grid item>
          {!queryUpMd || context?.hide ? (
            <SearchPath />
          ) : (
            <CustomTypographyH2
              variant="h2"
              sx={{
                p: '0',
                fontSize: { xl: 45, md: 35, xs: 40 },
              }}
            >
              Search results
            </CustomTypographyH2>
          )}
        </Grid>

        <Grid
          item
          sx={{
            pr: `${queryUpMd && '40px'}`,
          }}
        >
          <ResetButton
            sx={{
              fontSize: { md: '24px', sm: '16px', xs: '15px' },
              mr: '5px',
            }}
            onClick={() => router.push(Routes.search)}
          >
            Reset Filters
          </ResetButton>
          |
          <CustomHideFilterBtn
            onClick={context?.onHide}
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
              fontSize: { md: '24px', sm: '16px', xs: '15px' },
              ml: '5px',
            }}
          >
            {context?.hide ? 'Filters' : 'Hide Filters'}
          </CustomHideFilterBtn>
        </Grid>
      </CustomGridContainer>
    </Box>
  );
};

export default SearchResult;
