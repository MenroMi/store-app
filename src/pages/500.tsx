// mui
import {Typography } from '@mui/material';

// layout
import ErrorLayout from '@/components/Layout/ErrorLayout/ErrorLayout';

// mock data
const mockData = {
  title: 'Oh snap!',
  description: 'We’re not quite sure what went wrong. You can go back home...',
};

export default function Error500() {
  return (
    <ErrorLayout title='Error 500'>
    <Typography variant="h2">{mockData.title}</Typography>
      <Typography variant="h5Gray" sx={{ fontSize: { xs: '12px' } }}>{mockData.description}</Typography>
    </ErrorLayout>
  );
}
