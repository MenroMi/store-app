// basic
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// mui
import { Box, Rating, Typography } from '@mui/material';

// images
import right from '@/assets/icons/right.svg';
import left from '@/assets/icons/left.svg';

// constants
import { comments } from '@/constants/mockedData';

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
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        zIndex: 'tooltip',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        top: '48.5%',
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
            <Box
              component={'section'}
              key={comment.id}
              sx={{
                minWidth: 1,
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 4,
                px: 7,
                py: 6,
                display: 'flex',
                gap: '4px',
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
                <Box
                  component={'div'}
                  onClick={handleLeftArrow}
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    pl: '11px',
                    cursor: 'pointer',
                    visibility: offset === 0 ? 'hidden' : 'visible',
                  }}
                >
                  <Image
                    src={left}
                    alt={'arrowLeft'}
                    priority={true}
                    width={10}
                    height={19}
                    style={{}}
                  />
                </Box>
                <Box
                  component={'div'}
                  onClick={handleRightArrow}
                  sx={{
                    width: '36px',
                    height: '36px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    pl: '13px',
                    cursor: 'pointer',
                    visibility:
                      offset === commentWidth * (comments.length - 1) ? 'hidden' : 'visible',
                  }}
                >
                  <Image 
                  src={right} 
                  alt={'arrowRight'} 
                  priority={true} 
                  width={10} 
                  height={19} 
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SignComments;
