// basic
import { useEffect } from 'react';
import Image from 'next/image';

// mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// image
import deleteIcon from '@/assets/icons/close.svg';

// component
import FiltersList from '@/components/FiltersList/FiltersList';

// styled component
import { CustomOverlay } from './MobileFilterMenuStyles';

// interface
interface IMobileFilterMenuProps {
  onHide: (event: React.MouseEvent<HTMLImageElement>) => void;
}

// FUNCTIONAL COMPONENT
const MobileFilterMenu: React.FC<IMobileFilterMenuProps> = ({ onHide }): JSX.Element => {
  const theme = useTheme();
  const queryDownMd = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
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
          onClick={onHide}
          component={Image}
          src={deleteIcon}
          alt="cross for close filter menu"
          sx={{
            width: '10px',
            height: '10px',
            m: '20px 13px 30px 0',
            cursor: 'pointer',
          }}
        />
      </Box>
      <FiltersList />
    </CustomOverlay>
  );
};

export default MobileFilterMenu;
