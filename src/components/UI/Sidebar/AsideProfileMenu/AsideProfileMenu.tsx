// basic
import Link from 'next/link';
import Image from 'next/image';

// mui
import { Link as LinkMui, Button, Box, useTheme, Theme, Typography } from '@mui/material';

// components
import AsideProfile from '../AsideProfile/AsideProfile';

// styled components
import { CustomCircleNotification } from './styles';

// constants
import { ASIDE_MENU_LINKS } from '@/constants';
import { useContext } from 'react';
import { AuthUserContext } from '@/components/Providers/auth';

const AsideProfileMenu: React.FC = (): JSX.Element => {
  const { palette } = useTheme<Theme>();
  const {setUserToken} = useContext(AuthUserContext)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '320px' }}>
      <AsideProfile />
      <Box
        component={'ul'}
        sx={{ width: '100%', maxWidth: '320px', listStyle: 'none', pt: '23px' }}
      >
        {ASIDE_MENU_LINKS.map(({ id, icon, name, to }) => {
          return (
            <Box component={'li'} key={id} sx={{ width: '100%', mt: '10px' }}>
              <LinkMui component={Link} href={to} underline="hover" sx={{ width: '100%' }}>
                <Button
                  startIcon={<Box component={Image} src={icon} alt={name} width={20} height={20} />}
                  disableRipple
                  sx={{
                    color: palette?.text?.secondary,
                    width: '100%',
                    paddingLeft: '40px',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onClick={() => {
                    setUserToken('guest')
                    localStorage.removeItem('token')
                    sessionStorage.removeItem('token')
                  }}
                >
                  <Typography variant="h6">{name}</Typography>
                  {name === 'Wish list' && (
                    <CustomCircleNotification>
                      <Typography
                        variant="h6"
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translateY(-50%) translateX(-50%)',
                        }}
                      >
                        4
                      </Typography>
                    </CustomCircleNotification>
                  )}
                </Button>
              </LinkMui>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AsideProfileMenu;
