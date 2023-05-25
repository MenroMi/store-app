// libs
import { IAddProductRadioGroup } from '@/types/addProductTypes';
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
          width: '100%',
          mt: 1,
          mb: 4,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectSize(e.target.value)}
      >
        {sizes?.map((size) => (
          <FormControlLabel
            key={size.id}
            value={size.id}
            sx={{ m: 0 }}
            control={<Radio style={{ display: 'none' }} />}
            label={
              <Box
                onClick={() => handleSelectSize(size.id.toString())}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  margin: '8px 8px 8px 0',
                  border: '1px solid #494949',
                  borderRadius: 1,
                  cursor: 'pointer',
                  userSelect: 'none',
                  borderColor: `${
                    selectedSize === size.id.toString() ? theme.palette.primary.main : '#494949'
                  }`,
                }}
              >
                <Typography variant="body1">EU-{size.attributes.value}</Typography>
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
