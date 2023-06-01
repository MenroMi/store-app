import { Routes } from '@/constants';
import theme from '@/utils/mui/theme';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const ResetFilterButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: theme?.palette?.primary?.main,
        color: theme?.palette?.primary?.contrastText,
        '&:hover': {
          backgroundColor: theme?.palette?.primary?.dark,
        },
        '&:active': {
          backgroundColor: theme?.palette?.primary?.light,
        },
      }}
      onClick={() => router.push(Routes.search)}
    >
      Reset filters
    </Button>
  );
};

export default ResetFilterButton;
