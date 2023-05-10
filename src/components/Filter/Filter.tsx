import Image from 'next/image';
import { useState } from 'react';

import { Box, Typography, Collapse } from '@mui/material';
import { CustomFilterHeader } from './FilterStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import arrowIcon from '../../assets/icons/down.svg';

interface IFilterProps {
  label: string;
  children: React.ReactNode;
}

const Filter: React.FC<IFilterProps> = ({ label, children }): JSX.Element => {
  const [hideFilter, setHideFilter] = useState<boolean>(false);
  const theme = useTheme();
  const queryDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        borderBottom: '1px solid #eaecf0',
        p: `${!queryDownMd ? '0 0 23px 39px' : '20px'}`,
        mt: `${!queryDownMd ? '28px' : '0'}`,
        width: `${!queryDownLg ? '320px' : !queryDownMd ? '280px' : '100%'}`,
      }}
    >
      <CustomFilterHeader onClick={() => setHideFilter(!hideFilter)}>
        <Typography variant="h6">{label}</Typography>
        <Box
          component={Image}
          src={arrowIcon}
          alt="arrow for dropdown list with filters"
          sx={{ marginRight: '10px', transform: `${hideFilter && 'rotate(180deg)'}` }}
        />
      </CustomFilterHeader>
      <Collapse orientation="vertical" in={hideFilter}>
        {children}
      </Collapse>
    </Box>
  );
};

export default Filter;
