// basic
import { useEffect } from 'react';

// mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// component
import FiltersList from '@/components/FiltersList/FiltersList';

// styled component
import { CustomOverlay } from './MobileFilterMenuStyles';

// FUNCTIONAL COMPONENT
const MobileFilterMenu: React.FC = (): JSX.Element => {
  const theme = useTheme();
  const queryMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <CustomOverlay
      sx={{
        display: `${queryMD ? 'block' : 'none'}`,
        boxShadow: `${queryMD && '3px -11px 24px 0px rgba(0, 0, 0, 0.4);'}`,
      }}
    >
      <FiltersList />
    </CustomOverlay>
  );
};

export default MobileFilterMenu;
