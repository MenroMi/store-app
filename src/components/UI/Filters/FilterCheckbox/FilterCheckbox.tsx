import { AttrTypes, InputsData } from '@/types/filterListTypes';
import { FormControlLabel, Typography, Checkbox, useTheme, Theme } from '@mui/material';
import { useContext, useState } from 'react';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// interface
interface IFilterCheckbox {
  label: string;
  id: number;
  attributes: AttrTypes;
  checked: boolean;
  styles: object;
}

const FilterCheckbox: React.FC<IFilterCheckbox> = ({ id, attributes, label, checked, styles }) => {
  const theme = useTheme<Theme>();
  const context = useContext(FiltersContext);
  const [isClicked, setIsClicked] = useState<boolean>(checked);

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
          checked={isClicked}
          onClick={(e) => {
            setIsClicked(() => !isClicked);
            context?.isChecked(e);
          }}
        />
      }
      sx={styles}
    />
  );
};

export default FilterCheckbox;
