import Link from 'next/link';
import React from 'react';
import { Link as LinkMui, Box, useTheme, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';

interface IInfoCommentProps {
  email?: string;
}

const InfoComment = ({ email }: IInfoCommentProps) => {
  const { pathname } = useRouter();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();
  return (
    <Box sx={{ maxWidth: '550px', height: '40%' }}>
      <Typography variant="h2" sx={{ color: main }}>
        {pathname === Routes.reset ? 'Uh...Something is wrong' : ' Good!'}
      </Typography>
      <Typography variant="h3Bold" sx={{ mt: 1 }}>
        {pathname === Routes.reset ? 'Maybe, you changed the original link, please try again.' :
        `Please, visit your email to complete your
        ${pathname === Routes.register ? 'registration' : 'password reset'}.`}
      </Typography>
      {email && (
        <LinkMui component={Link} href={`https://${email}`} underline="none" target="_blank">
          <Typography variant="h4Warning" sx={{ mt: 4 }}>
            {email}
          </Typography>
        </LinkMui>
      )}
    </Box>
  );
};

export default InfoComment;
