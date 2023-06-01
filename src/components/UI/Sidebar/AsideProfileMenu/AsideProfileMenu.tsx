// basic
import Image from 'next/image';

// mui
import {
  Link as LinkMui,
  Button,
  Box,
  useTheme,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

// components
import AsideProfile from '../AsideProfile/AsideProfile';

// constants
import { ASIDE_MENU_LINKS } from '@/constants/routes';
import { Fragment, useContext } from 'react';
import { UserContext } from '@/providers/user';
import { useRouter } from 'next/router';
import theme from '@/utils/mui/theme';
import { NotificationContext } from '@/providers/notification';

const AsideProfileMenu: React.FC = (): JSX.Element => {
  const {
    palette: {
      text: { secondary },
    },
    breakpoints
  } = useTheme<Theme>();
  const { user, setUser } = useContext(UserContext);
  const { push, pathname } = useRouter();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

  const { setIsFailed, setIsOpen, setMessage } = useContext(NotificationContext);

  return queryDownMd ? (
    <></>
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '320px',
        pl: '40px',
      }}
    >
      <AsideProfile />
      <Box
        component={'nav'}
        sx={{
          pt: '23px',
          width: '100%',
          maxWidth: '320px',
        }}
      >
        {ASIDE_MENU_LINKS.filter((el) => el.role.includes(user ? 'user' : 'guest')).map(
          ({ id, icon, name, to }) => {
            return (
              <Fragment key={id}>
                <Button
                  startIcon={
                    <Box
                      component={Image}
                      src={icon}
                      alt={name}
                      width={20}
                      height={20}
                      priority={true}
                    />
                  }
                  disableRipple
                  key={id}
                  sx={{
                    background: `${pathname === to ? 'rgba(	254,100,94,0.05)' : 'transparent'}`,
                    width: 1,
                    justifyContent: 'flex-start',
                  }}
                  onClick={async () => {
                    await push(to);
                    if (name === 'Log out') {
                      setIsFailed(false);
                      setIsOpen(true);
                      setMessage('Succesfully logged out');
                      setUser(null);
                      localStorage.removeItem('token');
                      sessionStorage.removeItem('token');
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ color: secondary }}>
                    {name}
                  </Typography>
                </Button>
              </Fragment>
            );
          }
        )}
      </Box>
    </Box>
  );
};

export default AsideProfileMenu;
