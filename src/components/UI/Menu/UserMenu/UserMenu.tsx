import * as React from 'react';
import { Button, Menu, Box, MenuItem } from '@mui/material';
import Image from 'next/image';
import { getProfilePhoto } from '@/utils/profile/profilePhoto';
import { useContext } from 'react';
import { UserContext } from '@/providers/user';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import { CustomDropDownMenu } from '../DropDownMenu/styles';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user, setUser } = useContext(UserContext);
  const { push } = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ borderRadius: '50%', p: '0px', maxWidth: '35px', height:'64px' }}
      >
        <Image
          style={{ borderRadius: '50%' }}
          src={getProfilePhoto(user)}
          alt="avatar-icon"
          width={35}
          height={35}
          priority={true}
        />
      </Button>
      <CustomDropDownMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={async () => {
            await push(Routes.search);
            setUser(null);
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            handleClose();
          }}
        >
          Log out
        </MenuItem>
      </CustomDropDownMenu>
    </Box>
  );
}
