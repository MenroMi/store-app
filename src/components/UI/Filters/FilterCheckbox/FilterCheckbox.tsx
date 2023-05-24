import { AttrTypes, InputsData } from '@/types/filterListTypes';
import { FormControlLabel, Typography, Checkbox, useTheme, Theme } from '@mui/material';
import { useContext } from 'react';

// context
import { FiltersContext } from '@/contexts/filtersContext';
import { useRouter } from 'next/router';

// interface
interface IFilterCheckbox {
  label: string;
  id: number;
  attributes: AttrTypes;
}

const FilterCheckbox: React.FC<IFilterCheckbox> = ({ id, attributes, label }) => {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const context = useContext(FiltersContext);

  return (
    <FormControlLabel
      label={
        <Typography variant="h6" sx={{ fontWeight: '400', color: theme?.palette?.text?.caption }}>
          {attributes?.name}
        </Typography>
      }
      control={
        <Checkbox
          inputProps={{ datatype: label }}
          name={attributes?.name}
          id={`${id}`}
          checked={
            typeof router.query.gender === 'undefined'
              ? false
              : router.query.gender?.includes(attributes?.name!.toLowerCase())
          }
          onClick={(e) => context?.isChecked(e)}
        />
      }
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: '15px',
      }}
    />
  );
};

export default FilterCheckbox;
