// basic
import { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// mui
import { MenuItem, Box } from '@mui/material';

// context
import { ModalContext } from '@/providers/modal';

// images
import dotsBtn from '@/assets/icons/dots.svg';

// styled component
import { CustomDotsBtn, CustomDropDownMenu } from './styles';

// interface
import { MenuItemParams } from '@/types';

// constants
import { Routes } from '@/constants/routes';
import { homeItems, othersItems } from '@/constants/ui';
import { NotificationContext } from '@/providers/notification';
import { StorageContext } from '@/providers/sessionStorage';
import { useShoppingCart } from '@/providers/shoppingCard';

// interface
export interface IDropDownMenuProps {
  productID: number;
  productName: string;
  top?: string;
  right?: string;
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({
  productID,
  productName,
  top,
  right,
}): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const contextStorage = useContext(StorageContext);
  const router = useRouter();
  const open = Boolean(anchorElement);
  const { setIsOpen, setClickedId } = useContext(ModalContext);
  const { increaseCartQuantity } = useShoppingCart();
  const { setIsOpen: isOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  const openDropDownMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const handleOpenModal = (id: number) => {
    document.body.style.overflow = 'hidden';
    setClickedId(id);
    setIsOpen(true);
  };

  const setMenuItems = (items: MenuItemParams[]) => {
    return items.map(({ id, label, method }): JSX.Element => {
      if (label === 'Add to Cart') {
        return (
          <MenuItem
            key={id}
            onClick={() => {
              increaseCartQuantity(productID!);
              setAnchorElement(null);
              isOpen(true);
              setIsFailed(false);
              setMessage('Product was added to Bag');
            }}
          >
            {label}
          </MenuItem>
        );
      }

      if (label === 'Delete') {
        return (
          <MenuItem
            key={id}
            onClick={() => {
              handleOpenModal(productID);
              setAnchorElement(null);
            }}
          >
            {label}
          </MenuItem>
        );
      }

      if (label === 'View') {
        return (
          <MenuItem
            key={id}
            onClick={async () => {
              await router.push(`${Routes.products}/${productID}`);
            }}
            sx={{ maxHeight: '36px' }}
          >
            {label}
          </MenuItem>
        );
      }

      if (label === 'Edit') {
        return (
          <MenuItem
            key={id}
            onClick={async () => {
              await router.push(`${Routes.edit}/${productID}`);
            }}
            sx={{ maxHeight: '36px' }}
          >
            {label}
          </MenuItem>
        );
      }

      return (
        <MenuItem key={id} onClick={() => method}>
          {label}
        </MenuItem>
      );
    });
  };

  return (
    <Box zIndex={1} onClick={(e) => e.stopPropagation()}>
      <CustomDotsBtn
        aria-label="dropdown-menu"
        onClick={(e) => openDropDownMenu(e)}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          top: top,
          right: right,
        }}
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
    </Box>
  );
};

export default DropDownMenu;
