import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';
import { UPDATE_PROFILE_INPUTS } from '@/constants/ui';
import { ISettings } from '@/types';
import { IUpdateFormProps } from '@/types/formTypes';
import styled from '@emotion/styled';
import { Button, FormControl, FormLabel, OutlinedInput, Typography } from '@mui/material';
import React, { ChangeEvent } from 'react';

const FormMui = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const FormSettings = ({ loading, formData, setFormData, handleSubmit }: IUpdateFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <FormMui onSubmit={handleSubmit}>
      {UPDATE_PROFILE_INPUTS.map(({ id, placeholder, label, type }) => (
        <FormControl key={id}>
          <FormLabel htmlFor={id}>
            <Typography variant="caption">{label}</Typography>
          </FormLabel>
          <OutlinedInput
            sx={{ mt: 1 }}
            id={id}
            placeholder={placeholder}
            type={type}
            value={formData[id as keyof ISettings]}
            onChange={handleChange}
          />
        </FormControl>
      ))}
      <Button variant="contained" disabled={loading && true} type="submit">
        {loading ? <ButtonLoader /> : 'Сonfirm'}
      </Button>
    </FormMui>
  );
};

export default FormSettings;
