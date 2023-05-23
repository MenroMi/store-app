// pages
import Layout from '@/components/Layout/MainLayout';
import BagPage from './BagPage';

// interface
import { BagContextProvider } from '@/context/BagContext';
import Head from 'next/head';

const Bag = () => {
  return (
    <BagContextProvider>
      <Layout title="Bag">
        <main style={{ marginTop: '80px', width: '100%' }}>
          <Head>
            <title>Bag</title>
          </Head>
          <BagPage />
        </main>
      </Layout>
    </BagContextProvider>
  );
};

export default Bag;
