// mui
import { Box, Typography } from '@mui/material';

// interface
interface ICountBagProps {
  CountCategory: string;
  PriceValue: number;
}

const CountBagComponent = ({ CountCategory, PriceValue }: ICountBagProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h3">{CountCategory}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h3">$</Typography>
          <Typography variant="h3">{PriceValue}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CountBagComponent;
