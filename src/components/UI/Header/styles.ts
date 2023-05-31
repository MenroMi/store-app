import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import theme from '@/utils/mui/theme';
import Image from 'next/image';

interface INavProps {
  burger: boolean;
}

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 1px solid #eaecf0;
`;

export const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 44px;
`;

export const NavList = styled('ul')<INavProps>`
  display: flex;
  list-style-type: none;
  ${(props) =>
    props.burger
      ? `
      flex-direction: column;
      position: absolute;
      top: -20px;
      right: -20px;
      width: 270px;
      height: 100vh;
      padding: 80px 20px;
      list-style-type: none;
      background-color: green;
      row-gap: 36px;
      background-color: #fff;
      box-shadow: 0 0 0 9999px rgba(243, 243, 243, 0.9);
      `
      : `column-gap: 36px;`}
`;

export const NavListItem = styled('li')`
  display: flex;
  align-items: center;
  column-gap: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
`;

export const NavListLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const Options = styled('section')`
  display: flex;
  align-items: center;
`;

export const OptionsImage = styled(Image)`
  z-index: 1;
`;

export const SearchBar = styled(TextField)`
  transition: 0.3s;
  fieldset {
    border-radius: 42px;
  }
`;

export const Cart = styled('section')`
  [&.fieldset]: border-radius: 42px;
  display: flex;
  align-items: center;
  gap:18px;
`;

export const Burger = styled('section')`
  position: relative;
  display: flex;
  z-index: 1000;
  align-items: center;
`;

export const NavBurgerList = styled('section')``;

export const Header_Adaptive = {
  height: {
    lg: '120px',
    md: '100px',
    xs: '64px',
  },
  padding: {
    md: '0 40px 0 40px',
    xs: '0 20px 0 20px',
  },
};
