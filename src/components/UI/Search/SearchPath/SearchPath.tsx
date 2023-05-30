// basic
import React, { useContext } from 'react';

// mui
import { useTheme, Theme, Typography, useMediaQuery } from '@mui/material';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// styled component
import { CustomFlexWrapper } from './styles';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import makeArray from '@/utils/filters/makeRouterQueryArray';
import { getFilteredData } from '@/services/searchApi';

// FUNCTIONAL COMPONENT
const SearchPath: React.FC = (): JSX.Element => {
  const theme = useTheme<Theme>();
  const queryUpMd = useMediaQuery<unknown>(theme.breakpoints.up('md'));
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const context = useContext(FiltersContext);
  const router = useRouter();

  const query = makeArray(router.query);

  const { data } = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
    keepPreviousData: true,
  });

  return (
    <CustomFlexWrapper mt={`${queryUpMd && context?.hide ? '8px' : '0'}`}>
      <Typography
        variant="h4"
        sx={{
          marginRight: `${queryDownLg && '40px'}`,
          borderBottom: `${queryUpMd && !context?.hide && '1px solid #eaecf0'}`,
          pl: `${queryUpMd && context?.hide ? '40px' : !queryUpMd ? '0' : '40px'}`,
          pb: `${queryUpMd && !context?.hide && '16px'}`,
          fontSize: { sm: '25px', xs: '15px' },
        }}
      >
        {`${
          typeof context?.activeFilters?.brand?.length === 'undefined' ||
          context?.activeFilters?.brand?.length <= 0
            ? typeof context?.activeFilters?.name?.length === 'undefined' ||
              context?.activeFilters?.name?.length <= 0 ||
              typeof router.query?.name === 'undefined'
              ? 'All shoes'
              : `${context?.activeFilters?.name[0]}`
            : context?.activeFilters?.brand?.length > 1
            ? `${context?.activeFilters?.brand[0]} and others...`
            : context?.activeFilters?.brand[0]
        } (${
          typeof data?.meta?.pagination?.total === 'undefined' ? 0 : data?.meta?.pagination?.total
        })`}
      </Typography>
    </CustomFlexWrapper>
  );
};

export default SearchPath;
