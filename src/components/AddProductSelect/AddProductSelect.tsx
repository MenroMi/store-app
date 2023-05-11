// libs
import { FormControl, FormLabel, Typography, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import React from 'react';

// assets
import downArrow from '@/assets/icons/down.svg';

interface IAddProductSelect {
  id: string;
  label: string;
  selectedValue: string;
  handleChangeValue: (value: string) => void;
  options: string[];
}

export default function AddProductSelect({
  id,
  label,
  selectedValue,
  handleChangeValue,
  options,
}: IAddProductSelect) {
  return (
    <FormControl sx={{ mr: 2, width: '210px' }}>
      <FormLabel htmlFor={id}>
        <Typography variant="caption">{label}</Typography>
      </FormLabel>
      <Select
        IconComponent={() => <Image src={downArrow} alt="Arrow" style={{ margin: '24px 16px' }} />}
        required
        id={id}
        value={selectedValue}
        onChange={(e) => handleChangeValue(e.target.value)}
        sx={{ mt: 1.5 }}
      >
        {options.map((gender, index) => (
          // fix key in the future, index is bad practice
          <MenuItem key={index} value={gender}>
            <Typography variant="body1">{gender}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
