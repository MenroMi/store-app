// libs
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

// styles
import styles from '@/styles/componentStyles/UserProfile.module.scss';

interface IUserProfileProps {
  username: string;
  profileTopBgSrc: any;
  avatarSrc: string | StaticImageData;
  userBonusPoints: string;
}

export default function UserProfile({
  username,
  profileTopBgSrc,
  avatarSrc,
  userBonusPoints,
}: IUserProfileProps) {
  return (
    <Box sx={{ position: 'relative', maxWidth: '1480px' }}>
      <Image src={profileTopBgSrc} alt="Profile background" className={styles.user__background} />

      <Box sx={{ display: 'flex', position: 'absolute', top: '230px', ml: 6 }}>
        <Image
          src={avatarSrc}
          className={styles.user__avatar}
          alt="Avatar"
          width={120}
          height={120}
        />
        <Box sx={{ mb: 2, ml: 3, alignSelf: 'end' }}>
          <Typography variant="h5">{username}</Typography>
          <Typography variant="body1">{userBonusPoints} bonus points</Typography>
        </Box>
      </Box>
    </Box>
  );
}
