// basic
import Image from 'next/image';

// mui
import { Box, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

// interface
import { IUserProfileProps } from '@/types/userProfileTypes';
import { useContext } from 'react';
import { UserContext } from '@/providers/user';
import { getProfilePhoto } from '@/utils/profile/profilePhoto';

export default function UserProfile({
  username,
  profileTopBgSrc,
  userBonusPoints,
}: IUserProfileProps) {
  const { user } = useContext(UserContext);

  const theme = useTheme<Theme>();
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src={profileTopBgSrc}
        alt="Profile background"
        style={{
          maxWidth: '100%',
          maxHeight: queryDownSm ? '132px' : '262px',
          display: 'block',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          top: queryDownSm ? '110px' : '230px',
          ml: queryDownSm ? 2.25 : 6,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            border: queryDownSm ? '2px solid #ffffff' : '4px solid #ffffff',
            borderRadius: '50%',
          }}
        >
          <Image
            style={{ borderRadius: '50%' }}
            src={getProfilePhoto(user)}
            alt="Avatar"
            width={queryDownSm ? 60 : 120}
            height={queryDownSm ? 60 : 120}
            priority={true}
          />
        </Box>

        <Box sx={{ mb: queryDownSm ? 0.75 : 3.6, ml: queryDownSm ? 1.5 : 3, alignSelf: 'end' }}>
          <Typography variant="h5">{username}</Typography>
          <Typography variant="body1">{userBonusPoints} bonus points</Typography>
        </Box>
      </Box>
    </Box>
  );
}
