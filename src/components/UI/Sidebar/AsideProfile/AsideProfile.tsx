// basic
import Image from 'next/image';

// mui
import { Box, Typography } from '@mui/material';

// image
import avatarExample from '@/assets/avatarExample.png';
import { useContext } from 'react';
import { UserContext } from '@/components/Providers/user';

const AsideProfile: React.FC = (): JSX.Element => {
  const {user} = useContext(UserContext)
  return (
    <Box
      sx={{
        display: 'flex',
        pl: '40px',
        pb: '32px',
        alignItems: 'center',
        borderBottom: '1px solid #eaecf0',
      }}
    >
      <Image src={avatarExample} alt="Avatar" width={64} height={64} />
      <Box sx={{ ml: '16px' }}>
        <Typography variant="body2" sx={{ color: '#98A2B3' }}>
          Welcome
        </Typography>
        <Typography variant="h6">{user?.username}</Typography>
      </Box>
    </Box>
  );
};

export default AsideProfile;
