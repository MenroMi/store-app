// basic
import Image from 'next/image';

// mui
import { Box, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

// interface
import { IUserProfileProps } from '@/types/userProfileTypes';

export default function UserProfile({
  username,
  profileTopBgSrc,
  avatarSrc,
  userBonusPoints,
}: IUserProfileProps) {
  const theme = useTheme<Theme>();
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', maxWidth: '1480px' }}>
      <Box
        component={Image}
        src={profileTopBgSrc}
        alt="Profile background"
        sx={{
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
          component={Image}
          src={avatarSrc}
          alt="Avatar"
          width={queryDownSm ? 60 : 120}
          height={queryDownSm ? 60 : 120}
          sx={{
            border: queryDownSm ? '2px solid #ffffff' : '4px solid #ffffff',
            borderRadius: '50%',
          }}
        />
        <Box sx={{ mb: queryDownSm ? 0.75 : 2, ml: queryDownSm ? 1.5 : 3, alignSelf: 'end' }}>
          <Typography variant="h5">{username}</Typography>
          <Typography variant="body1">{userBonusPoints} bonus points</Typography>
        </Box>
      </Box>
    </Box>
  );
}
