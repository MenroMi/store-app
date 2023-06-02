import { NotificationContext } from '@/providers/notification';
import { Alert, Snackbar } from '@mui/material';
import React, { useContext } from 'react';

export default function Notification() {
  const { isOpen, setIsOpen, isFailed, message } = useContext(NotificationContext);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={() => setIsOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={() => setIsOpen(false)}
        severity={isFailed ? 'error' : 'success'}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
