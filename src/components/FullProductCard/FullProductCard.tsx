import { Box } from '@mui/material';
import React from 'react';


const FullProductCard = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '963px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '223px',
          }}
        >
          <img src="public\nike.png" alt="shoe" />
        </Box>
      </Box>
    </>
  );
}

export default FullProductCard;