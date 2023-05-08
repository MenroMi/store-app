import FullProductCard from '@/components/FullProductCard/FullProductCard';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';
import {
  Divider,
  Grid,
  Stack,
  Typography,
  SvgIcon,
  FormControl,
  FormLabel,
  OutlinedInput,
  Link as LinkMui,
  Checkbox,
  FormControlLabel,
  Button,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';

type Props = {};

const Bag = (props: Props) => {
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  return (
    <main>
      <Head>
        <title>Bag</title>
      </Head>
      <Grid
        container
        p={2}
        sx={{
          padding: '0',
        }}
      >
        <Box
          py={8}
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '1528px',
            marginInline: 'auto',
            padding: '0',
          }}
        >
          {/* Left container */}
          <Box sx={{ width: '100%', maxWidth: '963px' }}>
            <Typography variant="h2">Chart</Typography>
            <Grid item xs={12} mt={5} sx={{ marginInline: 'auto' }}>
              <Stack spacing={3} mb={3}>
                <FullProductCard />
              </Stack>
            </Grid>
          </Box>

          {/* Right Container */}
          <Box
            sx={{
              marginLeft: 'auto',
            }}
          >
            <Box
              sx={{
                width: '399px',
                marginInline: 'auto',
                textAlign: 'left',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Typography variant="h2">Summary</Typography>
              <Typography variant="h5" sx={{ marginTop: '59px' }}>
                Do you have a promocode?
                <SvgIcon sx={{ position: 'relative', top: 6 }}>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </SvgIcon>
              </Typography>
              <Box
                sx={{
                  marginTop: '38px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginBottom: '56px',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h3">Subtotal</Typography>
                    <Typography variant="h3">$</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h3">Shipping</Typography>
                    <Typography variant="h3">$</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h3">Tax</Typography>
                    <Typography variant="h3">$</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: '500',
                    paddingBottom: '22px',
                    paddingTop: '18px',
                    borderBottom: '1px #EAECF0 solid',
                    borderTop: '1px #EAECF0 solid',
                  }}
                >
                  <Typography variant="h3">Total</Typography>
                  <Typography variant="h3">$</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginTop: '53px',
                  }}
                >
                  {/* <LinkMui component={Link} href="/bag" underline="none">
                    <Typography variant="body2" sx={{ color: main, display: 'inline' }}>
                      Checkout
                    </Typography>
                  </LinkMui> */}
                  <SecondaryButton>PayPal</SecondaryButton>
                  <PrimaryButton>Checkout</PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </main>
  );
};

export default Bag;
