import { Grid, styled, Theme, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import { useRouter } from 'next/router';
import { Routes, getImage } from '@/constants';
import SignComments from '@/components/UI/Comments/SignComments/SignComments';
import Head from 'next/head';

const LayoutSignErrorPages = styled('div')`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

type ISplitLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const SplitLayout = ({ children, title = 'Shoes Shop' }: ISplitLayoutProps) => {
  const { pathname, push } = useRouter();
  const theme = useTheme<Theme>();
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <LayoutSignErrorPages>
          <Grid container sx={{ height: 1 }}>
            {pathname === Routes.authorization ||
              pathname === Routes.registration ||
              pathname === Routes.forgot ||
              pathname === Routes.reset ? (
              <Image
                src={logo}
                alt={'logoIcon'}
                style={{
                  position: 'absolute',
                  top: queryDownMd ? 18 : 50,
                  left: queryDownMd ? 20 : 40,
                  cursor: 'pointer'
                }}
                width={queryDownMd ? 35.31 : 40}
                height={queryDownMd ? 26.52 : 30}
                onClick={() => push(Routes.home)}
              />
            ) : null}
            <Grid item sm={6} sx={{ pt: queryDownMd ? '58.87px' : 0 }}>
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
                fill
                style={{ objectFit: 'cover', zIndex: 1000 }}
              />
              {pathname === Routes.registration && <SignComments />}
            </Grid>
          </Grid>
        </LayoutSignErrorPages>
      </main>
    </>
  );
};

export default SplitLayout;
