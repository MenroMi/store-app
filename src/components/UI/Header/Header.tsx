import React, { useContext, useEffect, useState } from 'react';
import * as styles from './styles';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, InputAdornment, Typography, useTheme, Theme } from '@mui/material';

import { Routes } from '@/constants';

import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import CartIcon from '@/assets/icons/bag.svg';
import Profile from '@/assets/icons/profile.svg';
import leftBurgerSetting from '@/assets/icons/leftBurgerSetting.svg';

import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { NAV_BURGER_LINKS, NAV_LINKS } from '@/constants';
import { useRouter } from 'next/router';

import { INavItem } from '@/types/INavItem';
import AsideProfile from '@/components/UI/Sidebar/AsideProfile/AsideProfile';

import { StorageContext } from '@/contexts/sessionStorageContext';
import { UserContext } from '@/components/Providers/user';
import UserMenu from '../Menu/UserMenu/UserMenu';

export default function Header() {
  const [isSearchClicled, setIsSearchClicked] = useState(false);
  const [isBurgerClicled, setIsBurgerClicked] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const contextStorage = useContext(StorageContext);
  const { push, pathname } = useRouter();

  const logOut = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.textContent === 'Log Out') {
      setUser(null);
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    }
  };

  /**
   *
   * @param item navigation item
   * @param itemToChech dynamic navigation item
   * @param unAuthItem item value if auth
   * @param authItem item value if not auth
   * @param type type of item field
   * @returns
   */

  const dynamicParams = (
    item: INavItem,
    itemToCheck: string,
    unAuthItem: string,
    authItem: string,
    type: string
  ) => {
    if (type === 'name') {
      return item.name === itemToCheck
        ? item.name === itemToCheck && user
          ? unAuthItem
          : authItem
        : item.name;
    } else if (type === 'link')
      return item.name === itemToCheck
        ? item.to === itemToCheck && user
          ? unAuthItem
          : authItem
        : item.to;
  };

  const {
    palette: {
      primary: { main },
    },
  } = useTheme<Theme>();

  useEffect(() => {
    contextStorage?.setNewLengthFromStorage();
  }, [contextStorage]);

  return (
    <styles.Header sx={styles.Header_Adaptive}>
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
          <Typography variant="h6">Products</Typography>
        </styles.NavListLink>
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
              maxWidth: '145px',
              width: 1,
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
        <styles.SearchBar
          sx={{
            '& fieldset': {
              sm: { border: '1px solid #494949' },
              xs: { border: `${isSearchClicled ? '1px solid #494949' : 'none'} ` },
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
              xs: `${isSearchClicled ? '150px' : '25px'} `,
            },
          }}
          id="search"
          type="search"
          placeholder="search"
          size="small"
          InputProps={{
            style: {
              height: '100%',
            },
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  width={22}
                  onClick={() => setIsSearchClicked((prev) => !prev)}
                  src={SearchIcon}
                  alt="search-icon"
                />
              </InputAdornment>
            ),
            autoComplete: 'off',
          }}
        />
        <styles.Cart>
          <Link href={Routes.bag}>
            <Box sx={{ position: 'relative', pt: '2px' }}>
              <Image width={22} height={24} priority={true} src={CartIcon} alt="cart-icon" />
              <Box
                bgcolor={main}
                sx={{
                  display: `${contextStorage?.storageLength === 0 ? 'none' : 'block'}`,
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
                  {contextStorage?.storageLength}
                </Box>
              </Box>
            </Box>
          </Link>
          {user && <UserMenu/>}
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
                    await push(to);
                    setIsBurgerClicked(false);
                    if (name === 'Log out') {
                      setUser(null);
                      localStorage.removeItem('token');
                      sessionStorage.removeItem('token');
                    }
                  }}
                >
                  <Image
                    src={pathname === to || (!user && name === 'Home') ? leftBurgerSetting : icon}
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
    </styles.Header>
  );
}
