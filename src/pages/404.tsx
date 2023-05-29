// mui
import {Typography } from '@mui/material';

// mock data
const mockData = {
  title: 'Error 404',
  description: "We can't find the page you are looking for. Sorry for the inconvenience.",
};

// styled components
import ErrorLayout from '@/components/Layout/ErrorLayout/ErrorLayout';

export default function Error404() {
  return (
    <ErrorLayout title={mockData.title} >
      <Typography variant="h2">{mockData.title}</Typography>
      <Typography variant="h5Gray" sx={{ fontSize: { xs: '12px' }}}>{mockData.description}</Typography>
 </ErrorLayout>
  );
}
