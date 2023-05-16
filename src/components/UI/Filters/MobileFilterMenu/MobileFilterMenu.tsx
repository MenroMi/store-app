// basic
import { useEffect } from 'react';
import Image from 'next/image';

// mui
import { useTheme, Theme } from '@mui/material/styles';
import { Box, Slide } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// image
import deleteIcon from '@/assets/icons/close.svg';

// component
import FiltersList from '@/components/UI/Filters/FiltersList/FiltersList';

// styled component
import { CustomOverlay } from './MobileFilterMenuStyles';

// interface
import { IMobileFilterMenuProps } from '@/types/filterListTypes';

// FUNCTIONAL COMPONENT
const MobileFilterMenu: React.FC<IMobileFilterMenuProps> = ({
  hide,
  onHide,
  isFetched,
  isError,
  isLoading,
  error,
  filters,
}): JSX.Element => {
  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Slide in={!hide} direction="left">
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
            onClick={onHide}
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
        <FiltersList filters={filters} />
      </CustomOverlay>
    </Slide>
  );
};

export default MobileFilterMenu;
