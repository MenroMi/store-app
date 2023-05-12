// basic
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// mui
import { Box, Rating, Typography } from '@mui/material';

// images
import right from '@/assets/icons/right.svg';
import left from '@/assets/icons/left.svg';

// constants
import { comments } from '@/constants';

// styled components
import { CustomBoxComments, CustomComments, CustomArrow } from './styles';

// FUNCTIONAL COMPONENT
const SignComments = () => {
  const [offset, setOffset] = useState<number>(0);
  const [commentWidth, setCommentWidth] = useState<number>(776);
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const el = commentsRef.current as HTMLDivElement;
      setOffset((offset / commentWidth) * el.offsetWidth);
      setCommentWidth(el.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleLeftArrow = () => {
    offset !== 0 && setOffset(offset - commentWidth);
  };

  const handleRightArrow = () => {
    offset !== commentWidth * (comments.length - 1) && setOffset(offset + commentWidth);
  };

  return (
    <CustomBoxComments
      sx={{
        zIndex: 'tooltip',
      }}
    >
      <Box
        component={'div'}
        ref={commentsRef}
        sx={{
          maxWidth: `776px`,
          minHeight: '290px',
          overflow: 'hidden',
        }}
      >
        <Box
          component={'div'}
          sx={{
            minWidth: 1,
            display: 'flex',
            transform: `translateX(-${offset}px)`,
            transition: 'transform ease-in-out 0.3s',
          }}
        >
          {comments.map((comment) => (
            <CustomComments
              key={comment.id}
              sx={{
                borderRadius: 4,
                px: 7,
                py: 6,
                minWidth: 1,
              }}
            >
              <Box component={'div'}>
                <Typography variant="h4">{`"${comment.text}"`}</Typography>
                <Box
                  component={'div'}
                  sx={{
                    mt: 2,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h4Bold">{comment.name}</Typography>
                  <Rating name="read-only" value={comment.rating} readOnly />
                </Box>
                <Typography variant="body1">{comment.location}</Typography>
              </Box>
              <Box
                component={'div'}
                sx={{
                  display: 'flex',
                  gap: 4,
                }}
              >
                <CustomArrow
                  onClick={handleLeftArrow}
                  sx={{
                    pl: '11px',
                  }}
                >
                  <Image src={left} alt={'arrowLeft'} />
                </CustomArrow>
                <CustomArrow
                  onClick={handleRightArrow}
                  sx={{
                    pl: '13px',
                  }}
                >
                  <Image src={right} alt={'arrowRight'} />
                </CustomArrow>
              </Box>
            </CustomComments>
          ))}
        </Box>
      </Box>
    </CustomBoxComments>
  );
};

export default SignComments;
