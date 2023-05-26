import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { getFilteredData } from '@/services/searchApi';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { InputsData } from '@/types/filterListTypes';
import { FiltersContext } from '@/contexts/filtersContext';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import makeArray from '@/utils/filters/makeRouterQueryArray';

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

  const handleChanges = (value: string | number) => {
    const regexp = /(?=(.*[a-zA-Z]))|(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/;

    if (regexp.test(String(value))) {
      return;
    } else {
      setActualAmount(() => +value);
    }
  };

  useEffect(() => {
    const maxNumber = () => {
      let arrayWithPrice: number[];
      let maxN: number;

      if (data?.data.length <= 0 || typeof data?.data === 'undefined') {
        maxN = 0;
        return maxN;
      } else {
        arrayWithPrice = data?.data?.map((product: InputsData) => product?.attributes?.price);
        maxN = Math.max(...arrayWithPrice);
      }

      setMax((prev) => (prev > maxN ? prev : maxN));
    };

    maxNumber();
  }, [max]);

  return (
    <Box sx={{ width: '95%', mt: '20px' }}>
      <Box>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Up to Amount</InputLabel>
          <OutlinedInput
            onChange={(e) => handleChanges(e.target.value)}
            onKeyDown={(e) => {
              contextFilters?.isChecked(e);
            }}
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
        onChange={(e, value) => handleChanges(value as number)}
        onChangeCommitted={(e) => {
          contextFilters?.isChecked(e);
        }}
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
