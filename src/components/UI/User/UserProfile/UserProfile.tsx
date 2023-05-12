// basic
import Image from 'next/image';

// mui
import { Box, Typography } from '@mui/material';

// interface
import { IUserProfileProps } from '@/types/userProfileTypes';

export default function UserProfile({
  username,
  profileTopBgSrc,
  avatarSrc,
  userBonusPoints,
}: IUserProfileProps) {
  return (
    <Box sx={{ position: 'relative', maxWidth: '1480px' }}>
      <Box
        component={Image}
        src={profileTopBgSrc}
        alt="Profile background"
        sx={{
          maxWidth: '100%',
          display: 'block',
        }}
      />

      <Box sx={{ display: 'flex', position: 'absolute', top: '230px', ml: 6 }}>
        <Box
          component={Image}
          src={avatarSrc}
          alt="Avatar"
          width={120}
          height={120}
          sx={{
            border: '4px solid #ffffff',
            borderRadius: '50%',
          }}
        />
        <Box sx={{ mb: 2, ml: 3, alignSelf: 'end' }}>
          <Typography variant="h5">{username}</Typography>
          <Typography variant="body1">{userBonusPoints} bonus points</Typography>
        </Box>
      </Box>
    </Box>
  );
}
