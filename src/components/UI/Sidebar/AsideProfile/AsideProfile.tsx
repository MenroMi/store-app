// basic
import Image from 'next/image';
import { useContext } from 'react';
import { UserContext } from '@/providers/user';

// mui
import { Box, Typography } from '@mui/material';

// image
import { getProfileName } from '@/utils/profile/profileName';
import { getProfilePhoto } from '@/utils/profile/profilePhoto';

const AsideProfile: React.FC = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <Box
      sx={{
        display: 'flex',
        pb: '32px',
        alignItems: 'center',
        borderBottom: '1px solid #eaecf0',
      }}
    >
      <Box sx={{width:'64px',height:'64px'}}>
      <Image
        style={{ borderRadius: '50%' }}
        src={getProfilePhoto(user)}
        alt="Avatar"
        width={64}
        height={64}
        priority={true}
        />
        </Box>
      <Box sx={{ ml: '16px' }}>
        <Typography variant="body2" sx={{ color: '#98A2B3' }}>
          Welcome
        </Typography>
        <Typography variant="h6">{getProfileName(user)}</Typography>
      </Box>
    </Box>
  );
};

export default AsideProfile;
