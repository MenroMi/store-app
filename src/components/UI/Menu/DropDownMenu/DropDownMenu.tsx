// basic
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// mui
import { MenuItem, Box } from '@mui/material';

// images
import dotsBtn from '@/assets/icons/dots.svg';

// styled component
import { CustomDotsBtn, CustomDropDownMenu } from './styles';

// interface
interface MenuItemParams {
  id: number;
  label: string;
  method?: () => void;
}

// objects with items for menu
const homeItems: MenuItemParams[] = [{ id: 1, label: 'Delete', method: () => {} }];
const othersItems: MenuItemParams[] = [
  { id: 1, label: 'View', method: () => {} },
  { id: 2, label: 'Add to Wish List', method: () => {} },
  { id: 3, label: 'Add to Cart', method: () => {} },
];

const DropDownMenu: React.FC = (): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const { pathname } = useRouter();
  const open = Boolean(anchorElement);

  const openDropDownMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const setMenuItems = (items: MenuItemParams[]) => {
    return items.map(({ id, label, method }): JSX.Element => {
      return (
        <MenuItem key={id} onClick={method}>
          {label}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <CustomDotsBtn
        aria-label="dropdown-menu"
        onClick={(e) => openDropDownMenu(e)}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Box component={Image} src={dotsBtn} alt="More" />
      </CustomDotsBtn>
      <CustomDropDownMenu
        open={open}
        onClose={() => setAnchorElement(null)}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {pathname === '/home' ? setMenuItems(homeItems!) : setMenuItems(othersItems!)}
      </CustomDropDownMenu>
    </>
  );
};

export default DropDownMenu;
