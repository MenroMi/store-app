// libs
import { IProductRadioGroup } from '@/types/formProductTypes';
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

export default function ProductRadioGroup({
  selectedSize,
  availableSize,
  handleSelectSize,
  sizes,
  isAddPage
}: IProductRadioGroup) {
  const theme = useTheme<Theme>();
  return (
    <FormControl>
      {isAddPage && <FormLabel htmlFor="size" sx={{ mt: 3 }}>
        <Typography variant="caption">Add size</Typography>
      </FormLabel>}
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
        {sizes?.map((size) => {
          const disabled = availableSize ? size.id !== availableSize?.id : false;  
          return (<FormControlLabel
            key={size.id}
            value={size.id}
            disabled={disabled}
            sx={{ m: 0 }}
            control={<Radio style={{ display: 'none' }} />}
            label={
              <Box
                onClick={() => !disabled && handleSelectSize(size.id.toString())}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  minWidth:'70px',
                  margin: '8px 8px 8px 0',
                  border: '1px solid #494949',
                  borderRadius: 1,
                  cursor: `${!disabled && 'pointer'}`,
                  userSelect: 'none',
                  borderColor: `${
                    selectedSize === size.id.toString() ? theme.palette.primary.main : '#494949'
                  }`,
                  backgroundColor: `${disabled && '#F0F0F0'}`,
                }}
              >
                <Typography variant="body1">EU-{size.attributes.value}</Typography>
              </Box>
            }
          />
        )})}
      </RadioGroup>
    </FormControl>
  );
}
