import Head from 'next/head';
import Header from '@/components/UI/Header';
import * as styles from './styles';
import { REGULAR_NAV_LINKS } from '@/constants';

interface ILayoutProps {
  title?: string;
  headerItems?: { name: string; to: string }[];
  children: React.ReactNode;
}

export default function Layout({ title, headerItems = REGULAR_NAV_LINKS, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Shoes Shop'}</title>
        <meta name="description" content="Shoes Shop. The best solution for your comfort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <styles.Layout>
        <Header navItems={headerItems} />
        <styles.Main>
          <section>{children}</section>
        </styles.Main>
      </styles.Layout>
    </>
  );
}
