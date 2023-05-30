// mui
import {Typography } from '@mui/material';

// layout
import ErrorLayout from '@/components/Layout/ErrorLayout/ErrorLayout';
import { mockData500 } from'@/constants/mockedData';

export default function Error500() {
  return (
    <ErrorLayout title='Error 500'>
    <Typography variant="h2">{mockData500.title}</Typography>
      <Typography variant="h5Gray" sx={{ fontSize: { xs: '12px' } }}>{mockData500.description}</Typography>
    </ErrorLayout>
  );
}
