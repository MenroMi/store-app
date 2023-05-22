// basic
import React, { useContext } from 'react';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// styled component
import { CustomFlexWrapper } from './SearchPathStyles';

// FUNCTIONAL COMPONENT
const SearchPath: React.FC = (): JSX.Element => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));

  const context = useContext(FiltersContext);

  return (
    <CustomFlexWrapper mt={`${queryUpMd && context?.hide ? '8px' : !queryUpMd ? '8px' : '0'}`}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '300',
          lineHeight: '18px',
          pl: `${queryUpMd && context?.hide ? '40px' : !queryUpMd ? '0' : '40px'}`,
          '&.MuiTypography-root': {
            fontSize: '15px',
          },
        }}
      >
        Shoes/Air Force 1
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginTop: `${queryUpMd && '8px'}`,
          marginRight: `${queryDownLg && '40px'}`,
          borderBottom: `${queryUpMd && !context?.hide && '1px solid #eaecf0'}`,
          pl: `${queryUpMd && context?.hide ? '40px' : !queryUpMd ? '0' : '40px'}`,
          pb: `${queryUpMd && !context?.hide && '16px'}`,
        }}
      >
        Air Force 1 (137)
      </Typography>
    </CustomFlexWrapper>
  );
};

export default SearchPath;
