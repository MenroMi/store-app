// basic
import React, { LegacyRef, useContext, useRef } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

// mui
import { Box, Button, Typography } from '@mui/material';

// context
import { ModalContext } from '@/components/Providers/modal';

// styles
import { CustomModalBox, CustomModalWrapper } from './ModalDelteItemStyles';

// assets
import closeIcon from '@/assets/icons/close.svg';

interface IModalDeleteItemProps {
  deleteMessage: string;
  deleteHandler: () => void;
}

export default function ModalDeleteItem({ deleteMessage, deleteHandler }: IModalDeleteItemProps) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>();
  const closeModal = () => {
    document.body.style.overflow = 'scroll';
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteHandler();
    closeModal();
  };
  return createPortal(
    <CustomModalWrapper
      display={isOpen ? 'flex' : 'none'}
      ref={modalRef as LegacyRef<HTMLDivElement>}
    >
      <CustomModalBox>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h2">{deleteMessage}</Typography>
          <Image
            src={closeIcon}
            alt="close"
            width={16}
            height={16}
            style={{ cursor: 'pointer' }}
            onClick={closeModal}
          />
        </Box>

        <Typography variant="body1" sx={{ mt: 7 }}>
          Lorem ipsum dolor sit amet consectetur. Sed imperdiet tempor facilisi massa aliquet sit
          habitant. Lorem ipsum dolor sit amet consectetur.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #EBEBEB',
            pt: 7,
            mt: 7,
          }}
        >
          <Button variant="outlined" sx={{ p: '20px 120px' }} onClick={closeModal}>
            Cancel
          </Button>

          <Button variant="contained" sx={{ p: '20px 120px' }} onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </CustomModalBox>
    </CustomModalWrapper>,
    document.body
  );
}
