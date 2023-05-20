// basic
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// mui
import { MenuItem, Box } from '@mui/material';

// images
import dotsBtn from '@/assets/icons/dots.svg';

// styled component
import { CustomDotsBtn, CustomDropDownMenu } from './styles';

// interface
import { MenuItemParams } from '@/types';

// constants
import { Routes, homeItems, othersItems } from '@/constants';

// interface
interface IDropDownMenuProps {
  productID: number;
  productName: string;
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({ productID, productName }): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorElement);

  const openDropDownMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const setMenuItems = (items: MenuItemParams[]) => {
    return items.map(({ id, label, method }): JSX.Element => {
      if (typeof method === 'undefined') {
        return (
          <MenuItem key={id} onClick={() => method}>
            {label}
          </MenuItem>
        );
      }

      return (
        <MenuItem key={id} onClick={() => method(productID, productName)}>
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
        {router.pathname === Routes.myProducts
          ? setMenuItems(homeItems!)
          : setMenuItems(othersItems!)}
      </CustomDropDownMenu>
    </>
  );
};

export default DropDownMenu;
