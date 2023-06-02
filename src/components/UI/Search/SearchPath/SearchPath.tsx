// basic
import React, { useContext } from 'react';
import { useRouter } from 'next/router';

// rq
import { useQuery } from '@tanstack/react-query';

// mui
import { useTheme, Theme, Typography, useMediaQuery } from '@mui/material';

// services
import { getFilteredData } from '@/services/searchApi';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';
import getActualSearchingName from '@/utils/search/getActualSearchingName';

// context
import { FiltersContext } from '@/providers/filters';

// styled component
import { CustomFlexWrapper } from './styles';

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
        {`${getActualSearchingName(context?.activeFilters?.brand, context?.activeFilters?.name)} (${
          typeof data?.meta?.pagination?.total === 'undefined' ? 0 : data?.meta?.pagination?.total
        })`}
      </Typography>
    </CustomFlexWrapper>
  );
};

export default SearchPath;
