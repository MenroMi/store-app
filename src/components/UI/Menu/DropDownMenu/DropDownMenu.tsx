// basic
import { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// mui
import { MenuItem, Box } from '@mui/material';

// context
import { StorageContext } from '@/contexts/sessionStorageContext';

// images
import dotsBtn from '@/assets/icons/dots.svg';

// styled component
import { CustomDotsBtn, CustomDropDownMenu } from './styles';

// interface
import { MenuItemParams } from '@/types';

// constants
import { Routes } from '@/constants/routes';
import { homeItems, othersItems } from '@/constants/ui';


// interface
interface IDropDownMenuProps {
  productID: number;
  productName: string;
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({ productID, productName }): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const contextStorage = useContext(StorageContext);
  const router = useRouter();
  const open = Boolean(anchorElement);

  const openDropDownMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const setMenuItems = (items: MenuItemParams[]) => {
    return items.map(({ id, label, method }): JSX.Element => {
      if (label === 'Add to Cart') {
        return (
          <MenuItem key={id} onClick={() => {
            contextStorage?.addUniqueID(productName, productID)
            setAnchorElement(null)
          }}>
            {label}
          </MenuItem>
        );
      }

      if (label === 'View') {
        return (
          <MenuItem key={id} onClick={() => {
            router.push(`${Routes.products}/${productID}`);
          }}>
            {label}
          </MenuItem>
        )
      }

      return (
        <MenuItem key={id} onClick={() => method}>
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
