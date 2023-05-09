import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomFilterHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  h6: {
    lineHeight: '19px',
  },
}));

export const CustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderRadius: '42px' },
    fontSize: '12px',
    fontWeight: '500',
  },
  width: '100%',
  input: {
    '&::placeholder': {
      opacity: 1,
    },
  },
  marginBottom: '20px',
}));
