import { NotificationContext } from '@/components/Providers/notification';
import { Alert, Snackbar } from '@mui/material';
import React, { useContext } from 'react';

export default function Notification() {
  const { isOpen, setIsOpen, isFailed, message } = useContext(NotificationContext);

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => setIsOpen(false)}>
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
