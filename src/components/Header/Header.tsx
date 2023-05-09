import React from 'react';
import * as styles from './styles';

import Link from 'next/link';
import Image from 'next/image';
import { InputAdornment, TextField } from '@mui/material';

import Logo from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import CartIcon from '../../assets/icons/bag.svg';

interface IHeaderProps {
  navItems: { name: string; to: string }[];
}

export default function Header({ navItems }: IHeaderProps) {
  return (
    <styles.Header>
      <nav>
        <styles.NavList>
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          {navItems.map((item, index) => (
            <styles.NavListItem key={index}>
              <styles.NavListLink href={item.to}>{item.name}</styles.NavListLink>
            </styles.NavListItem>
          ))}
        </styles.NavList>
      </nav>
      <styles.Options>
        <styles.SearchBar
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
                <Image src={SearchIcon} alt="search-icon" />
              </InputAdornment>
            ),
          }}
        />
        <styles.Cart>
          <Link href={'/'}>
            <Image src={CartIcon} alt="cart-icon" />
          </Link>
        </styles.Cart>
      </styles.Options>
    </styles.Header>
  );
}
