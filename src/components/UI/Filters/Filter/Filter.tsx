// basic
import Image from 'next/image';
import { useState } from 'react';

// mui
import { Box, Typography, Collapse } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, Theme } from '@mui/material/styles';

// image
import arrowIcon from '@/assets/icons/down.svg';

// styled component
import { CustomFilterHeader } from './styles';

// interface
interface IFilterProps {
  name: string;
  children: React.ReactNode;
}

// FUNCTIONAL COMPONENT
const Filter: React.FC<IFilterProps> = ({ name, children }): JSX.Element => {
  const [hideFilter, setHideFilter] = useState<boolean>(false);
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

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
        <Typography variant="h6">{name}</Typography>
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
