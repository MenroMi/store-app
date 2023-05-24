import { useState, useContext, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { getFilteredData } from '@/services/searchApi';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { InputsData } from '@/types/filterListTypes';
import { FiltersContext } from '@/contexts/filtersContext';

const FilterPrice: React.FC = (): JSX.Element => {
  const router = useRouter();
  const maxRef = useRef(0);
  const contextFilters = useContext(FiltersContext);

  const { data } = useQuery({
    queryKey: ['filteredData', router.query],
    queryFn: () => getFilteredData(router.query),
  });

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

    maxRef.current = maxRef.current > maxN ? maxRef.current : maxN;
  };

  maxNumber();

  return (
    <Box sx={{ width: '95%', mt: '20px' }}>
      <Slider
        onChange={(e) => contextFilters?.isChecked(e)}
        name="price"
        valueLabelDisplay="auto"
        aria-label="custom thumb label"
        defaultValue={20}
        max={maxRef.current}
      />
    </Box>
  );
};

export default FilterPrice;

/***
 * 
 *       <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max={450}
      />
 */
