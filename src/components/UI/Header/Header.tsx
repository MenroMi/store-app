// basic
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// mui
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  useTheme,
  Theme,
  useMediaQuery,
} from '@mui/material';

// theme MUI
import theme from '@/utils/mui/theme';

// images
import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import CartIcon from '@/assets/icons/bag.svg';
import leftBurgerSetting from '@/assets/icons/leftBurgerSetting.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';

// context
import { UserContext } from '@/providers/user';

// constants
import { NAV_BURGER_LINKS, Routes } from '@/constants/routes';
import { NotificationContext } from '@/providers/notification';

// components
import AsideProfile from '@/components/UI/Sidebar/AsideProfile/AsideProfile';
import UserMenu from '../Menu/UserMenu/UserMenu';
import SearchHeader from '../Search/SearchHeader/SearchHeader';

// styled components
import * as styles from './styles';

// interface
import { useShoppingCart } from '@/providers/shoppingCard';

export default function Header() {
  const [isBurgerClicled, setIsBurgerClicked] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  const { user, setUser } = useContext(UserContext);
  const { cartQuantity } = useShoppingCart();
  const { setIsFailed, setIsOpen, setMessage } = useContext(NotificationContext);
  const { push, pathname } = useRouter();

  const {
    palette: {
      primary: { main },
    },
  } = useTheme<Theme>();

  return (
    <styles.Header sx={styles.Header_Adaptive}>
      {searchOpen ? (
        <SearchHeader setSearchOpen={setSearchOpen} />
      ) : (
        <>
          <styles.Nav>
            <Link href={user ? Routes.myProducts : Routes.search}>
              <Image src={Logo} alt="logo" priority={true} width={40} height={30} />
            </Link>
            <styles.NavListLink
              href={user ? Routes.myProducts : Routes.search}
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none',
                },
              }}
            >
              <Typography variant="h6">{user ? 'My profile' : 'Products'}</Typography>
            </styles.NavListLink>
            {user  && <styles.NavListLink
              href={Routes.search}
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none',
                },
              }}
            >
              <Typography variant="h6">Catalog</Typography>
            </styles.NavListLink>}
          </styles.Nav>
          <styles.Options
            sx={{
              columnGap: { md: '40px', xs: 3 },
            }}
          >
            {!user && (
              <Button
                variant="outlined"
                sx={{
                  width: '145px',
                  height: '48px',
                  display: {
                    md: 'flex',
                    xs: 'none',
                  },
                }}
                onClick={() => push(Routes.login)}
              >
                Sign in
              </Button>
            )}
            <Box
              sx={{
                display: {
                  sm: 'flex',
                  xs: 'none',
                },
              }}
              onClick={() => {
                setSearchOpen(true);
              }}
            >
              <styles.SearchBar
                sx={{
                  '& fieldset': {
                    sm: { border: '1px solid #494949' },
                    xs: { border: 'none' },
                  },
                  height: {
                    lg: '48px',
                    sm: '40px',
                    xs: '25px',
                  },
                  width: {
                    lg: '320px',
                    md: '250px',
                    sm: '200px',
                    xs: '25px',
                  },
                }}
                disabled
                type="search"
                placeholder="search"
                size="small"
                InputProps={{
                  style: {
                    height: '100%',
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image width={22} src={SearchIcon} alt="search-icon" />
                    </InputAdornment>
                  ),
                  autoComplete: 'off',
                }}
              />
            </Box>
            <styles.Cart>
              <Link href={Routes.bag}>
                <Box sx={{ position: 'relative', pt: '2px' }}>
                  <Image width={22} height={24} priority={true} src={CartIcon} alt="cart-icon" />
                  <Box
                    bgcolor={main}
                    sx={{
                      display: `${cartQuantity === 0 ? 'none' : 'block'}`,
                      position: 'absolute',
                      top: '-5px',
                      right: '-10px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                    }}
                  >
                    <Box
                      sx={{
                        color: 'white',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      {cartQuantity}
                    </Box>
                  </Box>
                </Box>
              </Link>
              {queryDownSm && (
                <Image
                  width={22}
                  onClick={() => setSearchOpen(true)}
                  src={SearchIcon}
                  alt="search-icon"
                />
              )}
              {!queryDownMd && user && <UserMenu />}
            </styles.Cart>
            <styles.Burger
              sx={{
                display: {
                  md: 'none',
                  xs: 'flex',
                },
              }}
            >
              <styles.OptionsImage
                onClick={() => setIsBurgerClicked((prev) => !prev)}
                width={22}
                src={isBurgerClicled ? CloseIcon : BurgerIcon}
                alt="burger-icon"
                priority={true}
              />
              {isBurgerClicled && (
                <styles.NavList
                  sx={{
                    display: {
                      lg: 'none',
                      xs: 'flex',
                    },
                  }}
                  burger
                >
                  <AsideProfile />
                  {NAV_BURGER_LINKS.filter(
                    (el) => el.role && el.role.includes(user ? 'user' : 'guest')
                  ).map(({ icon, role, name, to }) => (
                    <styles.NavListItem
                      key={name}
                      onClick={async () => {
                        if (name === 'Log out') {
                          await push(to);
                          setUser(null);
                          localStorage.removeItem('token');
                          sessionStorage.removeItem('token');
                          setIsFailed(false);
                          setIsOpen(true);
                          setMessage('Succesfully logged out');
                        } else if (name === 'Home' && !user){
                          push(Routes.search)
                        } else {
                          await push(to);
                        }
                        setIsBurgerClicked(false);
                      }}
                    >
                      <Image
                        src={
                          pathname === to || (!user && name === 'Home') ? leftBurgerSetting : icon
                        }
                        alt="menu-icon"
                        width={20}
                        height={20}
                        priority={true}
                      />
                      <Typography variant="h6">{name}</Typography>
                    </styles.NavListItem>
                  ))}
                </styles.NavList>
              )}
            </styles.Burger>
          </styles.Options>
        </>
      )}
    </styles.Header>
  );
}
