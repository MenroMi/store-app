import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { FiltersContext } from '@/context/filtersContext';
import { ProductsContext } from '@/context/productsContext';

function valuetext(value: number) {
  return `${value}°C`;
}

const FilterPrice: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number[]>([150, 350]);

  const contextFilters = useContext(FiltersContext);
  const contextProducts = useContext(ProductsContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const maxNumber = () => {
    let maxN: number;

    try {
      maxN = Math.max(...contextProducts?.takeOnlyPrice()!);
    } catch {
      maxN = 400;
    }

    return maxN;
  };

  return (
    <Box sx={{ width: '95%', mt: '20px' }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={0}
        max={maxNumber()}
      />
    </Box>
  );
};

export default FilterPrice;
