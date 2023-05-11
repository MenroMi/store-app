// libs
import {
  FormControl,
  FormLabel,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  useTheme,
  Theme,
} from '@mui/material';
import React from 'react';

interface IAddProductRadioGroup {
  selectedSize: string;
  handleSelectSize: (size: string) => void;
  sizes: string[];
}

export default function AddProductRadioGroup({
  selectedSize,
  handleSelectSize,
  sizes,
}: IAddProductRadioGroup) {
  const theme = useTheme<Theme>();

  return (
    <FormControl>
      <FormLabel htmlFor="size" sx={{ mt: 3 }}>
        <Typography variant="caption">Add size</Typography>
      </FormLabel>
      <RadioGroup
        value={selectedSize}
        id="size"
        name="size"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          mt: 1,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectSize(e.target.value)}
      >
        {sizes.map((size) => (
          <FormControlLabel
            key={size}
            value={size}
            sx={{ m: 0 }}
            control={<Radio style={{ display: 'none' }} />}
            label={
              <Box
                onClick={() => handleSelectSize(size)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  border: '1px solid #494949',
                  borderRadius: 1,
                  cursor: 'pointer',
                  userSelect: 'none',
                  borderColor: `${selectedSize === size ? theme.palette.primary.main : '#494949'}`,
                }}
              >
                <Typography variant="body1">{size}</Typography>
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
