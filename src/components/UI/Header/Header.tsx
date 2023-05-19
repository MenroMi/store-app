import React, { useState } from 'react';
import * as styles from './styles';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Icon, InputAdornment, SvgIcon } from '@mui/material';
import { Routes } from '@/constants';

import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import CartIcon from '@/assets/icons/bag.svg';

import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { NAV_BURGER_LINKS, NAV_LINKS } from '@/constants';

export default function Header() {
  const [isSearchClicled, setIsSearchClicked] = useState(false);
  const [isBurgerClicled, setIsBurgerClicked] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <styles.Header sx={styles.Header_Adaptive}>
      <styles.Nav>
        <Link href={Routes.home}>
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
              <styles.NavListLink href={item.to}>{item.name}</styles.NavListLink>
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
            <Image width={22} src={CartIcon} alt="cart-icon" />
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
              {NAV_BURGER_LINKS.map((item, index) => (
                <styles.NavListItem key={index}>
                  <styles.NavListItemIcon src={item.icon} alt="menu-icon" />
                  <styles.NavListLink href={item.to} onClick={() => setIsBurgerClicked(true)}>
                    {item.name === 'Log In'
                      ? item.name === 'Log In' && isAuth
                        ? 'Log Out'
                        : 'Log In'
                      : item.name}
                  </styles.NavListLink>
                </styles.NavListItem>
              ))}
            </styles.NavList>
          )}
        </styles.Burger>
        <Button
          variant="contained"
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          Log In
        </Button>
      </styles.Options>
    </styles.Header>
  );
}
