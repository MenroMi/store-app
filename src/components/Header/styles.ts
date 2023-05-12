import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import theme from '@/utils/mui/theme';

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding-left: 40px;
  padding-right: 60px;
  border-bottom: 1px solid #eaecf0;
`;

export const NavList = styled('ul')`
  display: flex;
  list-style-type: none;
  column-gap: 36px;
`;

export const NavListItem = styled('li')`
  vertical-align: middle;
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
  column-gap: 26px;
`;

export const SearchBar = styled(TextField)`
  width: 320px;
  height: 48px;
  fieldset {
    border-radius: 42px;
  }
`;

export const Cart = styled('section')`
  [&.fieldset]: border-radius: 42px;
  display: flex;
  align-items: center;
`;