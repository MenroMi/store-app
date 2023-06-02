import { Grid, styled, Theme, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import { useRouter } from 'next/router';
import { Routes, getImage } from '@/constants/routes';
import SignComments from '@/components/UI/Comments/SignComments/SignComments';
import Head from 'next/head';

const LayoutAuthPages = styled('div')`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

interface IAuthLayoutProps{
  children: React.ReactNode;
  title?: string;
  isErrorPage?: boolean;
};

const AuthLayout = ({ children, title = 'Shoes Shop', isErrorPage }: IAuthLayoutProps) => {
  const { pathname, push } = useRouter();
  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <LayoutAuthPages>
          <Grid container sx={{ height: 1 }}>
            {!isErrorPage && <Image
              src={logo}
              alt={'logoIcon'}
              style={{
                position: 'absolute',
                top: queryDownMd ? 18 : 50,
                left: queryDownMd ? 20 : 40,
                cursor: 'pointer',
              }}
              priority={true}
              width={queryDownMd ? 35.31 : 40}
              height={queryDownMd ? 26.52 : 30}
              onClick={() => push(Routes.search)}
            />}
            <Grid item sm={6} sx={{ pt: queryDownMd ? '58.87px' : 0, width: 1 }}>
              <Grid
                container
                sx={{
                  height: 1,
                  flexDirection: 'column',
                  justifyContent: queryDownMd ? 'start' : 'center',
                  alignContent: 'center',
                  alignItems: 'start',
                  px: '20px',
                  pt: queryDownMd ? '35.13px' : 0,
                  borderTop: queryDownMd ? '1px solid #EAECF0' : 'none',
                }}
              >
                {children}
              </Grid>
            </Grid>
            <Grid item sm={6} sx={{ position: 'relative' }}>
              <Image
                src={getImage(pathname)}
                alt={`${pathname.slice(1)}Bg`}
                priority={true}
                fill
                style={{ objectFit: 'cover', zIndex: 1000 }}
              />
              {pathname === Routes.register && <SignComments />}
            </Grid>
          </Grid>
        </LayoutAuthPages>
      </main>
    </>
  );
};

export default AuthLayout;
