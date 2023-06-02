// basic
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// mui
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Box, Slider } from '@mui/material';

// rq
import { useQuery } from '@tanstack/react-query';

// services
import { getFilteredData } from '@/services/searchApi';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';
import { handleChanges, maxNumber } from '@/utils/filters/filterPriceUtils';

// context
import { FiltersContext } from '@/providers/filters';

// constants

const FilterPrice: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [max, setMax] = useState(0);
  const [actualAmount, setActualAmount] = useState<number>(30);
  const contextFilters = useContext(FiltersContext);

  const query = makeArray(router.query);

  const { data } = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
  });

  useEffect(() => {
    maxNumber(data?.data, setMax);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max]);

  return (
    <Box sx={{ width: '95%', mt: '20px' }}>
      <Box>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Up to Amount</InputLabel>
          <OutlinedInput
            onChange={(e) => handleChanges(e.target.value, setActualAmount)}
            onKeyDown={contextFilters?.isChecked}
            name="input-price"
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Up to Amount"
            sx={{ height: '35px' }}
            value={actualAmount}
          />
        </FormControl>
      </Box>
      <Slider
        onChange={(_, value) => {
          handleChanges(value as number, setActualAmount);
        }}
        onChangeCommitted={contextFilters?.isChecked}
        title="price"
        name="price"
        valueLabelDisplay="auto"
        aria-label="price filter"
        value={+actualAmount}
        max={max}
      />
    </Box>
  );
};

export default FilterPrice;
