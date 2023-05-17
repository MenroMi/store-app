import { InputsData } from '@/types/filterListTypes';
import { FormControlLabel, Typography, Checkbox, useTheme, Theme } from '@mui/material';
import { useContext } from 'react';

// context
import { FiltersContext } from '@/context/filtersContext';

const FilterCheckbox = ({ id, attributes }: InputsData) => {
  const theme = useTheme<Theme>();
  const context = useContext(FiltersContext);

  return (
    <FormControlLabel
      label={
        <Typography variant="h6" sx={{ fontWeight: '400', color: theme?.palette?.text?.caption }}>
          {attributes?.name}
        </Typography>
      }
      control={<Checkbox name={attributes?.name} onClick={(e) => context?.isChecked(e)} />}
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: '15px',
      }}
    />
  );
};

export default FilterCheckbox;
