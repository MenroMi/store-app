// libs
import { FormControl, FormLabel, Typography, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import React from 'react';

// assets
import downArrow from '@/assets/icons/down.svg';

// interfaces
import { IProductSelect } from '@/types/formProductTypes';

export default function ProductSelect({
  id,
  label,
  selectedValue,
  handleChangeValue,
  options,
  selectName,
  width = '100%',
  marginRight = 0,
}: IProductSelect) {
  return (
    <FormControl sx={{ mr: marginRight, width: width }}>
      <FormLabel htmlFor={id}>
        <Typography variant="caption">{label}</Typography>
      </FormLabel>
      <Select
        IconComponent={() => <Image src={downArrow} alt="Arrow" style={{ margin: '24px 16px' }} />}
        required
        id={id}
        value={selectedValue}
        name={selectName}
        onChange={(e) => handleChangeValue(e.target.value)}
        sx={{ mt: 1.5 }}
      >
        {options?.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <Typography variant="body1">{option.attributes.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
