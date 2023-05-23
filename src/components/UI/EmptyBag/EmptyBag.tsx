import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const EmptyBag = () => {
  return (
    <Grid
      container
      sx={{
        padding: '0',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography variant="h2" sx={{ marginLeft: '15px' }}>
          Chart
        </Typography>
        <Box sx={{ marginTop: '155px' }}>
          
        </Box>
      </Box>
    </Grid>
  );
};

export default EmptyBag;
