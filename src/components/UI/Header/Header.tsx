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

import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { NAV_BURGER_LINKS, NAV_LINKS } from '@/constants';
import { useRouter } from 'next/router';
import { AuthUserContext } from '@/components/Providers/auth';
import { INavItem } from '@/types/INavItem';
import AsideProfile from '../Sidebar/AsideProfile/AsideProfile';
import { StorageContext } from '@/context/sessionStorageContext';

export default function Header() {
  const [isSearchClicled, setIsSearchClicked] = useState(false);
  const [isBurgerClicled, setIsBurgerClicked] = useState(false);
  const { userToken, setUserToken } = useContext(AuthUserContext);
  const contextStorage = useContext(StorageContext);
  const { push } = useRouter();
  const isAuth = () => {
    return userToken && userToken !== 'guest';
  };
  const nav_burger_links = isAuth() ? NAV_BURGER_LINKS.slice(3) : NAV_BURGER_LINKS.slice(0, 3);

  const logOut = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.textContent === 'Log Out') {
      setUserToken('guest');
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
        ? item.name === itemToCheck && isAuth()
          ? unAuthItem
          : authItem
        : item.name;
    } else if (type === 'link')
      return item.name === itemToCheck
        ? item.to === itemToCheck && isAuth()
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
        <Link href={isAuth() ? Routes.home : Routes.search}>
          <Image src={Logo} alt="logo" />
        </Link>
        <styles.NavList
          burger={false}
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          {NAV_LINKS.map((item, index) => (
            <styles.NavListItem key={index}>
              <styles.NavListLink
                href={dynamicParams(item, 'Home', Routes.home, Routes.search, 'link')!}
              >
                {item.name}
              </styles.NavListLink>
            </styles.NavListItem>
          ))}
        </styles.NavList>
      </styles.Nav>
      <styles.Options
        sx={{
          columnGap: {
            md: '26px',
            xs: '22px',
          },
        }}
      >
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
            <Box sx={{ position: 'relative' }}>
              <Image width={22} src={CartIcon} alt="cart-icon" />
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
              {nav_burger_links.map((item, index) => (
                <styles.NavListItem key={index} onClick={logOut}>
                  <styles.NavListItemIcon src={item.icon} alt="menu-icon" />
                  <styles.NavListLink
                    href={
                      dynamicParams(
                        item,
                        'Home',
                        Routes.home,
                        isAuth() ? Routes.home : Routes.search,
                        'link'
                      )!
                    }
                    onClick={() => setIsBurgerClicked(true)}
                  >
                    {dynamicParams(item, 'Log In', 'Log Out', 'Log In', 'name')}
                  </styles.NavListLink>
                </styles.NavListItem>
              ))}
            </styles.NavList>
          )}
        </styles.Burger>
        {!userToken ||
          (userToken === 'guest' && (
            <Button
              variant="text"
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none',
                },
              }}
              onClick={() => push(Routes.login)}
            >
              <Image src={Profile} alt={'LogIn'} width={23} height={23} />
              <Typography variant="subtitle2" sx={{ pl: '4px' }}>
                Log in
              </Typography>
            </Button>
          ))}
      </styles.Options>
    </styles.Header>
  );
}
