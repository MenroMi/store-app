// basic
import React, { useEffect, useContext } from 'react';
import Image from 'next/image';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// context
import { FiltersContext } from '@/providers/filters';

// image
import deleteIcon from '@/assets/icons/close.svg';

// component
import FiltersList from '@/components/UI/Filters/FiltersList/FiltersList';

// styled component
import { CustomOverlay } from './styles';

// FUNCTIONAL COMPONENT
const MobileFilterMenu: React.FC = (): JSX.Element => {
  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const context = useContext(FiltersContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomOverlay
      sx={{
        display: `${queryDownMd ? 'block' : 'none'}`,
        boxShadow: `${queryDownMd && '3px -11px 24px 0px rgba(0, 0, 0, 0.4);'}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Box
          onClick={context?.onHide}
          component={Image}
          src={deleteIcon}
          alt="cross for close filter menu"
          sx={{
            width: '10px',
            height: '10px',
            m: '20px 33px 30px 0',
            cursor: 'pointer',
          }}
        />
      </Box>
      <FiltersList />
    </CustomOverlay>
  );
};

export default MobileFilterMenu;
